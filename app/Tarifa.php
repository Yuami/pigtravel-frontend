<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tarifa extends Model
{
    protected $table = "tarifa";

    public function vivienda()
    {
        return $this->belongsToMany(ViviendaHasTarifa::class, Vivienda::class);
    }
}
