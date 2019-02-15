<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vendedor extends Model
{
    protected $primaryKey = 'idPersona';
    protected $table = "vendedor_vivienda";

    public function persona()
    {
        return $this->belongsTo(Persona::class);
    }

    public function viviendas()
    {
        return $this->hasMany(Vivienda::class, 'idVendedor');
    }
}
