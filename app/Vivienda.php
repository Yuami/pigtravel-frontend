<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Vivienda extends Model
{
    protected $table = 'vivienda';
    protected $fillable =
        ['nombre', 'capacidad', 'coordX', 'coordY', 'metrosCuadrados', 'calle', 'horaEntrada',
            'horaSalida', 'alquilerAutomatico', 'destacada', 'idTipoVivienda', 'idCiudad', 'idVendedor', 'descripcion'];

    public function vendedor()
    {
        return $this->belongsTo(Vendedor::class, 'idPersona');
    }

    public function fotos()
    {
        return $this->hasManyThrough(Fotos::class, ViviendaHasFotos::class, "idFoto","id", "id", "idFoto");
    }

    public function city()
    {
        return $this->belongsTo(Cities::class);
    }

    public function tipoVivienda()
    {
        return $this->belongsTo(TipoVivienda::class);
    }
    static function details($id){
        $regions = DB::table('vivienda')
            ->select('vivienda.*', 'persona.nombre as vendedor','persona.apellido1','tarifa.precio')
            ->join('persona','persona.id','=','vivienda.idVendedor')
            ->join('vivienda_has_tarifa','vivienda_has_tarifa.idVivienda','=','vivienda.id')
            ->join('tarifa','vivienda_has_tarifa.idTarifa','=','tarifa.id')
            ->where('vivienda.id','=',$id)
            ->get();
        return $regions;
    }

}
