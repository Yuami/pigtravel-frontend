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
        return $this->belongsTo(Persona::class, 'idVendedor');
    }

    public function fotos()
    {
        return $this->hasMany(ViviendaHasFotos::class, "idVivienda");
    }

    public function city()
    {
        return $this->belongsTo(Cities::class, 'idCiudad','id');
    }

    public function tipoVivienda()
    {
        return $this->belongsTo(TipoVivienda::class, 'idTipoVivienda');
    }

    public function valoraciones()
    {
        return $this->hasMany(ValoracionVivienda::class, 'idVivienda');
    }

    public function tarifas()
    {
        return $this->hasManyThrough(Tarifa::class, ViviendaHasTarifa::class, "idVivienda","id","id", "idTarifa");
    }

    public function servicios()
    {
        return $this->hasManyThrough(Servicio::class, ViviendaHasServicio::class, "idVivienda", "id", "id", "idServicio");
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
