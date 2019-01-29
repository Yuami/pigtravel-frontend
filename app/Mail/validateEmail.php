<?php

namespace App\Mail;

use App\Persona;
use App\Token;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class validateEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $email;

    public function __construct($token)
    {
        $this->token = $token->token;
        $this->email = $token->email;


    }


    public function build()
    {
        return $this->view('mails/emailsvalidate');
    }
}
