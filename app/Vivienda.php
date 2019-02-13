<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vivienda extends Model
{
    protected $table = 'vivienda';
    protected $fillable =
        ['nombre', 'capacidad', 'coordX', 'coordY', 'metrosCuadrados', 'calle', 'horaEntrada',
            'horaSalida', 'alquilerAutomatico', 'destacada', 'idTipoVivienda', 'idCiudad', 'idVendedor', 'descripcion'];

    public function vendedor()
    {
        return $this->belongsTo(Persona::class, 'idVendedor');
    }

    public function fotos()
    {
        return $this->hasMany(ViviendaHasFotos::class, "idVivienda");
    }

    public function city()
    {
        return $this->belongsTo(Cities::class, 'idCiudad','id');
    }

    public function tipoVivienda()
    {
        return $this->belongsTo(TipoVivienda::class, 'idTipoVivienda');
    }

    public function valoraciones()
    {
        return $this->hasMany(ValoracionVivienda::class, 'idVivienda');
    }

    public function tarifas()
    {
        return $this->hasManyThrough(Tarifa::class, ViviendaHasTarifa::class, "idVivienda","id","id", "idTarifa");
    }

}
