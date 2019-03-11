<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Reserva extends Model
{
    protected $table = 'reserva';

    public $timestamps = false;

    public function estados()
    {
        return $this->hasManyThrough(Estado::class, ReservaHasEstado::class, 'idReserva', 'id', 'id', 'idEstado');
    }

    public function getLastEstadoAttribute()
    {
        return $this->estados()->orderBy('fechaCambio', 'desc')->first();
    }

    static function details($id)
    {
        return DB::table('reserva')
            ->select('vivienda.nombre as nombreVivienda', 'fotoPerfil.path as perfilVendedor', 'fotoCasa.path as fotoCasa', 'reserva.*', 'persona.nombre', 'persona.apellido1', 'cities.name as cityName', 'countries.name as countryName', 'reserva_has_estado.idEstado')
            ->join('vivienda', 'reserva.idVivienda', '=', 'vivienda.id')
            ->join('reserva_has_estado', 'reserva_has_estado.idReserva', '=', 'reserva.id')
            ->join('vivienda_has_fotos', 'vivienda_has_fotos.idVivienda', '=', 'vivienda.id')
            ->join('persona', 'vivienda.idVendedor', '=', 'persona.id')
            ->join('fotos as fotoPerfil', 'fotoPerfil.id', '=', 'persona.idFoto')
            ->join('fotos as fotoCasa', 'fotoCasa.id', '=', 'vivienda_has_fotos.idFoto')
            ->join('cities', 'vivienda.idCiudad', '=', 'cities.id')
            ->join('countries', 'cities.country_id', '=', 'countries.id')
            ->where('reserva.id', '=', $id)
            ->orderBy('reserva_has_estado.fechaCambio')
            ->limit(1)
            ->get();
    }

    static function datesByHouse($id)
    {
        $block = DB::table('reserva')
            ->select('reserva.id', 'reserva.checkIn', 'reserva.checkOut')
            ->where('reserva.idVivienda', '=', $id)
            ->get();
        return $block;
    }

    function dates()
    {
        return $this->belongsTo(Cliente::class,'idPersona','idCliente');
    }
}

