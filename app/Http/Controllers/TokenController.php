<?php

namespace App\Http\Controllers;

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
        if (is_null($token))
            return abort(403, 'Token has expired or does not exist');
        $this->verify($token);
        $this->destroy($token);
        return "Account has been verified";
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

    public function generate($email, $type) //type = verifyAcc || changePass
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
                echo " ♥ (/^-^)/ ♥ ";
                break;
        }
    }
}
