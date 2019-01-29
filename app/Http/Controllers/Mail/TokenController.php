<?php

namespace App\Http\Controllers\Mail;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Token;

class TokenController extends Controller
{
    public function generate($email, $type) //Type = verifyAcc || changePass
    {
        $token = Token::updateOrCreate([
            "email" => $email,
            "token" => md5(rand(1, 1000)),
            "type" => $type
        ]);


   /*     $token = new Token();
        $token->email = $email;
        $token->token = md5(rand(1, 1000));
        $token->type = $type;
        $token->send();
        return $token; */
    }
}
