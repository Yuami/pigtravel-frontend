<?php

namespace App\Http\Controllers;

use App\Mail\passwordChangeEmail;
use App\Mail\validateEmail;
use App\Persona;
use App\Token;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class TokenController extends Controller
{

    public function index(Request $request)
    {
        $token = Token::getByToken($request->token);
        $this->checkToken($token);
        $this->verify($token);
        $this->destroy($token);

        setcookie('alert', 'verified', time() + (60), "/");
        return redirect('/');
    }

    public function change(Request $request)
    {
        $request->validate([
            'new' => 'required|confirmed',
            'token' => 'required'
        ]);

        $persona = Persona::where('correo',
            (Token::where('token', $request->token)
                ->get()->first()->email))->first();

        $persona->password = password_hash($request->new, PASSWORD_ARGON2I);
        $persona->save();
        return redirect('/');
    }

    public function recover(Request $request)
    {
        $token = Token::getByToken($request->token);
        $this->checkToken($token);
        $this->verify($token);
        //$this->destroy($token);

        setcookie('pwd', $token->token, time() + (120), "/");
        return redirect('/');
    }


    public function checkToken($token)
    {
        if (is_null($token))
            return abort(403, 'Token has expired or does not exist');
    }

    public function destroy($token)
    {
        Token::where([
            'email' => $token->email,
            'type' => $token->type,
        ])->delete();
    }

    public function verify($token)
    {
        $persona = Persona::getByCorreo($token->email);
        $persona->verify();
    }

    public static function generate($email, $type) //type = verifyAcc || changePass
    {
        $token = Token::firstOrNew(array(
            "email" => $email,
            "type" => $type
        ));

        $genToken = md5(rand(1, 1000));

        if ($token->token) {
            Token::where([
                'email' => $email,
                'type' => $type,
            ])->update(['token' => $genToken]);
        } else {
            $token->token = $genToken;
            $token->save();
        }

        switch ($type) {
            case "verifyAcc":
                Mail::to($email)->send(new validateEmail(Token::getByToken($genToken)));
                break;
            case "changePass":
                Mail::to($email)->send(new passwordChangeEmail(Token::getByToken($genToken)));
                break;
        }
    }
}
