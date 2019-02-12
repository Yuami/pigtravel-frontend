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
        return $this->belongsTo(Vendedor::class, 'idPersona');
    }

    public function fotos()
    {
        return $this->hasManyThrough(Fotos::class, ViviendaHasFotos::class, "idFoto","id", "id", "idFoto");
    }

    public function city()
    {
        return $this->belongsTo(Cities::class);
    }

    public function tipoVivienda()
    {
        return $this->belongsTo(TipoVivienda::class);
    }

}
