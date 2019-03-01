<?php
/**
 * Created by PhpStorm.
 * User: Pep Toni
 * Date: 01/02/2019
 * Time: 12:30
 */

namespace App\Mail;

use App\Reserva;
use App\Vivienda;
use Illuminate\Mail\Mailable;

class reservedEmail extends Mailable
{
    public $reserva;
    public $email;
    public $estado;
    public $house;
    public $paymentID;
    public $precio;
    public $serviceFee;
    public $total;


    public function __construct($email, $idReserva, $estado, $paymentID)
    {
        $this->paymentID = $paymentID;
        $this->reserva = Reserva::find($idReserva)->first();
        $this->house = Vivienda::find(Reserva::find($idReserva))->first();
        $this->email = $email;
        $this->estado = $estado;

        $this->total = $this->reserva->precio;
        $this->precio = ($this->total - 5) / 1.05;
        $this->serviceFee = $this->total - $this->precio;
    }


    public function build()
    {
        return $this->markdown('mails/reservedemail');
    }
}