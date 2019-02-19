<?php
/**
 * Created by PhpStorm.
 * User: Pep Toni
 * Date: 15/02/2019
 * Time: 13:36
 */

namespace App;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Estados extends Model
{
    protected $table = 'estado_has_idioma';

    static function statesByLanguage()
    {
        $states = DB::table('estado')
            ->select('estado.*','idioma.nombre as idioma','estado_has_idioma.nombre')
            ->join('estado_has_idioma','estado_has_idioma.idEstado','=','estado.id')
            ->join('idioma','idioma.id','=','estado_has_idioma.idIdioma')
            ->get();
        return $states;
    }
}