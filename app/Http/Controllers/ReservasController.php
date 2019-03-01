<?php

namespace App\Http\Controllers;

use App\Mail\ReservedEmail;
use App\Mensaje;
use App\ReservaHasEstado;
use App\ReservaHasEstadoInsert;
use App\Vivienda;
use App\Reserva;
use http\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;


class ReservasController extends Controller
{
    public function index()
    {
        return view('welcome');
    }

    public function show()
    {

        return view('welcome');
    }

    public function destroy(Reserva $reserva)
    {
        $reserva->delete();
    }

    public function store(Request $request)
    {
        $vivienda = Vivienda::find($request->idVivienda);

        //Cambia el tiempo a la entrada y salida de la vivienda
        $checkIn = substr($request->checkIn, 0, 11) . $vivienda->horaEntrada;
        $checkOut = substr($request->checkOut, 0, 11) . $vivienda->horaSalida;

        //Crea la reserva
        $reserva = new Reserva;
        $reserva->checkIn = $checkIn;
        $reserva->checkOut = $checkOut;
        $reserva->idVivienda = $request->idVivienda;
        $reserva->totalClientes = $request->pax;
        $reserva->idMetodoPago = 1;
        $reserva->precio = $request->precio;
        $reserva->idCliente = 1;
        $reserva->save();


        if ($request->estado != 3) {
            $estado = new ReservaHasEstadoInsert();
            $estado->idEstado = $request->estado;
            $estado->idReserva = $reserva->id;
            $estado->save();
        }

        if (strlen($request->message) > 1) {
            $message = new Mensaje;
            $message->idSender = $reserva->idCliente;
            $message->idReciever = $vivienda->idVendedor;
            $message->mensaje = $request->message;
            $message->idVivienda = $reserva->idVivienda;
            $message->idReserva = $reserva->id;
            $message->save();
        }

        $this->generateMail('newtimestube@gmail.com', $reserva->id, $request->estado, $request->paymentID);

        return $reserva->id;
    }

    public function generateMail($email, $idReserva, $estado, $paymentID)
    {
        if ($estado == 4) {
            Mail::to($email)->send(new ReservedEmail($email, $idReserva, $estado, $paymentID));
        }
    }
}
