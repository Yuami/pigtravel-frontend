<?php

namespace App\Mail;

use App\Persona;
use App\Token;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class passwordChangeEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $token;
    public $email;
    public $persona;
    public function __construct($token)
    {
        $this->persona = Persona::getByCorreo($token->email);
        $this->token = $token->token;
        $this->email = $token->email;
    }


    public function build()
    {
        return $this->markdown('mails/passwordchangeemail');
    }
}
