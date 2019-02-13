<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Cities extends Model
{
    protected $table = 'cities';

    public function region()
    {
        return $this->belongsTo(Region::class);
    }

    public function country()
    {
        return $this->belongsTo(Country::class);
    }

    static function getIfHaveHouses()
    {
        $cities = DB::table('cities')
            ->select('cities.id', 'cities.name', 'regions.name as province')
            ->distinct()
            ->join('vivienda', 'cities.id', '=', 'vivienda.idCiudad')
            ->join('regions', 'regions.id', '=', 'cities.region_id')
            ->get();
        return $cities;
    }
}


