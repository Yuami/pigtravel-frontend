<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ViviendasHasServicio extends Model
{
    protected $table = 'vivienda_has_servicio';

    protected static function getByVivienda($id)
    {
        /*       return DB::table('vivienda_has_servicio')
               ->select('vivienda_has_servicio.idVivienda', 'vivienda_has_servicio.idServicio as id', 'servicio_has_idioma.idServicio', 'idioma.nombre as idioma', 'servicio_has_idioma.nombre as servicio')
               ->selectRaw('ifnull(vivienda_has_servicio.activo, 0) activo')
               ->join('idioma', 'servicio_has_idioma.idIdioma', '=', 'idioma.id')
               ->where('vivienda_has_servicio.idVivienda', '=', $id)
               ->orWhereNull('vivienda_has_servicio.idServicio')
               ->get(); */

        return DB::table('servicio_has_idioma')
            ->selectRaw('servicio_has_idioma.idServicio,  servicio_has_idioma.nombre, COALESCE(vivienda_has_servicio.activo, 0) AS activo')
            ->leftJoin('vivienda_has_servicio', 'servicio_has_idioma.idServicio', '=', DB::raw('vivienda_has_servicio.idServicio and vivienda_has_servicio.idVivienda =' . $id))
            ->get();
    }
}