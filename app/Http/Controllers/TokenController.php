<?php

namespace App\Http\Controllers;

use App\Mail\validateEmail;
use App\Token;
use Illuminate\Support\Facades\Mail;

class TokenController extends Controller
{
    public function generate($email, $type) //Type = verifyAcc || changePass
    {
        $token = Token::firstOrNew(array(
            "email" => $email,
            "type" => $type
        ));

        if ($token->token) {
            Token::where([
                'email' => $email,
                'type' => $type,
            ])->update(['token' => md5(rand(1, 1000))]);
        } else {
            $token->token = md5(rand(1, 1000));
            $token->save();
        }
        if ($type == "verifyAcc") {
            Mail::to($email)->send(new validateEmail($token));
        } else if ($type == 'changePass') {
            echo " ♥ (/^-^)/ ♥ ";
        }
    }


}
