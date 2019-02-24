<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ValoracionVivienda extends Model
{
    protected $table = "valoracion_vivienda";

    public function ratings()
    {
        return $this->hasMany(ValoracionViviendaHasTipo::class, 'id', 'idValoracion');
    }

    static function vvById($id){
            $VV = DB::table('valoracion_vivienda')
                ->select('valoracion_vivienda.mensaje','valoracion_vivienda.media','persona.nombre')
                ->join('persona','persona.id','=','valoracion_vivienda.idPersona')
                ->where('valoracion_vivienda.idVivienda','=',$id)
                ->get();
            return $VV;
        }

}
