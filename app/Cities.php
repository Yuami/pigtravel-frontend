<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Cities extends Model
{
    protected $table = 'cities';

    static function getIfHave(){
        $cities = DB::table('cities')
            ->select('name')
            ->join('vivienda', 'cities.id', '=', 'vivienda.idCiudad')
            ->get();
      return $cities;
    }
}


