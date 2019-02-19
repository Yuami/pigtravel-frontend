<?php
/**
 * Created by PhpStorm.
 * User: Pep Toni
 * Date: 08/02/2019
 * Time: 15:52
 */
namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Region extends Model{

    protected $table = 'regions';

    static function getIfHaveHouses(){
        $regions = DB::table('regions')
            ->select('regions.id','regions.name as province')
            ->distinct()
            ->join('cities','cities.region_id','=','regions.id')
            ->join('vivienda', 'cities.id', '=', 'vivienda.idCiudad')
            ->get();
        return $regions;
    }
}

