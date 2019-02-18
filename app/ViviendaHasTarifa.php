<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ViviendaHasTarifa extends Model
{
    protected $table = "vivienda_has_tarifa";
    protected $primaryKey = ["idVivienda", "idTarifa"];
}
