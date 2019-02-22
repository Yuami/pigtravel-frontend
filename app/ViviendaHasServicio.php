<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ViviendaHasServicio extends Model
{
    protected $table = "vivienda_has_servicio";
    protected $primaryKey = ["idVivienda", "idServicio"];
}
