<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ViviendasHasServicio extends Model
{
    protected $table = 'vivienda_has_servicio';

    protected static function getByVivienda($id)
    {

        return DB::table('servicio_has_idioma')
            ->selectRaw('idioma.nombre as idioma, servicio_has_idioma.idServicio, servicio.icon, servicio_has_idioma.nombre, COALESCE(vivienda_has_servicio.activo, 0) AS activo')
            ->leftJoin('vivienda_has_servicio', 'servicio_has_idioma.idServicio', '=', DB::raw('vivienda_has_servicio.idServicio and vivienda_has_servicio.idVivienda =' . $id))
            ->join('idioma', 'idioma.id', '=', 'servicio_has_idioma.idIdioma')
            ->join('servicio', 'servicio.id', '=', 'servicio_has_idioma.idServicio' )
            ->get();
    }
}