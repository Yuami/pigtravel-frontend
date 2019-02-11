<?php

namespace App\Http\Controllers;

use App\Reserva;
use App\Mail\validateEmail;
use App\Token;
use Illuminate\Support\Facades\Mail;

class ReservasController extends Controller
{
    public function index() {
        return Reserva::all();
    }

    public function show() {
        return view('welcome');
    }

    public function destroy(Reserva $reserva) {
        $reserva->delete();
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
                'idReserva' =>$idReserva,
            ])->update(['token' => $genToken]);
        } else {
            $token->token = $genToken;
            $token->save();
        }

                Mail::to($email)->send(new validateEmail(Token::getByToken($genToken)));

        }
}
