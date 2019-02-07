<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ViviendasHasServicio extends Model
{
    protected $table = 'vivienda_has_servicio';

    protected static function getByVivienda($id)
    {
       /* return DB::table('vivienda_has_servicio')
            ->leftJoin('servicio_has_idioma', 'vivienda_has_servicio.idServicio', '=', 'servicio_has_idioma.idServicio')
            ->where('idVivienda', '=', $id)
            ->get(); */

       return DB::table('vivienda_has_servicio')
           ->select('servicio_has_idioma.idServicio', 'idioma.nombre', 'servicio_has_idioma.nombre')
           ->selectRaw('ifnull(vivienda_has_servicio.activo, 0) activo')
           ->join('idioma', 'servicio_has_idioma.idIdioma', '=', 'idioma.id')
           ->rightJoin('servicio_has_idioma', 'vivienda_has_servicio.idServicio', '=', 'servicio_has_idioma.idServicio')
           ->where('idVivienda', '=', $id)
           ->orWhereNull('vivienda_has_servicio.idServicio')
           ->get();
    }
}
