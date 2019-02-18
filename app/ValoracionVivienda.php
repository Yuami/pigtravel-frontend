<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ValoracionVivienda extends Model
{
    protected $table = "valoracion_vivienda";

    public function ratings()
    {
        return $this->hasMany(ValoracionViviendaHasTipo::class, 'id', 'idValoracion');
    }
}
