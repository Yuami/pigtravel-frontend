<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Reserva extends Model
{
    protected $table = 'reserva';


    static function details($id){
        $regions = DB::table('reserva')
            ->select('reserva.id','reserva.checkIn','reserva.checkOut','vivienda.nombre as nombreVivienda','reserva.precio','reserva.totalClientes','estado_has_idioma.nombre as estado','persona.nombre','persona.apellido1')
            ->join('vivienda', 'reserva.idVivienda', '=', 'vivienda.id')
            ->join('reserva_has_estado', 'reserva_has_estado.idReserva', '=', 'reserva.id')
            ->join('estado_has_idioma', 'estado_has_idioma.idEstado', '=', 'reserva_has_estado.idEstado')
            ->join('persona', 'vivienda.idVendedor', '=', 'persona.id')
            ->where('reserva.id','=',$id)
            ->orderBy('reserva_has_estado.fechaCambio')
            ->limit(1)
            ->get();
        return $regions;
    }
}

