<?php

namespace App\Http\Controllers;

use App\Reserva;
use App\Mail\validateEmail;
use App\Token;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ReservasController extends Controller
{
    public function index()
    {
        $title = 'Bookings';
        return view('welcome', compact('title'));
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
        $reserva = new Reserva;
        $reserva->checkIn = $request->checkIn;
        $reserva->checkOut = $request->checkOut;
        $reserva->idVivienda = $request->idVivienda;
        $reserva->totalClientes = $request->pax;
        $reserva->idMetodoPago = 1;
        $reserva->precio = $request->precio;
        $reserva->idCliente = 1;
        $reserva->save();

        return $reserva->id;

    }

    public function generateMail($email, $idReserva)
    {
        $token = Token::firstOrNew(array(
            "email" => $email,
            "idReserva" => $idReserva
        ));

        $genToken = md5(rand(1, 1000));

        if ($token->token) {
            Token::where([
                'email' => $email,
                'idReserva' => $idReserva,
            ])->update(['token' => $genToken]);
        } else {
            $token->token = $genToken;
            $token->save();
        }

        Mail::to($email)->send(new validateEmail(Token::getByToken($genToken)));

    }
}
