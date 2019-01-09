<?php

namespace App\Http\Controllers;

use App\Reserva;
use Illuminate\Http\Request;

class ReservasController extends Controller
{
    public function index() {
        return Reserva::all();
    }

    public function show(Reserva $reserva) {
        return Reserva::find($reserva->id);
    }
}
