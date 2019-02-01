<?php
/**
 * Created by PhpStorm.
 * User: Pep Toni
 * Date: 01/02/2019
 * Time: 12:30
 */

namespace App\Mail;


class reservationEmail
{
    public $token;
    public $email;
    public $persona;
    public function __construct($token)
    {
        $this->reserva = Reserva::getById($token->idReserva);
        $this->token = $token->token;
        $this->email = $token->email;
    }


    public function build()
    {
        return $this->markdown('mails/reservationemail');
    }
}