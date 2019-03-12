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
        return $this->belongsTo(City::class, 'idCiudad','id');
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

    public function reservas()
    {
        return $this->hasMany(Reserva::class, 'idVivienda');
    }

    public function rejectableByDates($checkIn, $checkOut)
    {
        $rejected = false;
        foreach ($this->reservas as $reserva){
            $id = $reserva->lastEstado->id;
            $rejectableState = $id == 2 || $id == 4;
            $intersection = $reserva->checkIn < $checkOut && $reserva->checkOut > $checkIn;

            if ($rejected = $rejectableState && $intersection)
                break;
        }

        return $rejected;
    }

    static function details($id){
        $regions = DB::table('vivienda')
            ->select('vivienda.*', 'persona.nombre as vendedor','persona.apellido1','tarifa.precio')
            ->join('persona','persona.id','=','vivienda.idVendedor')
            ->join('vivienda_has_tarifa','vivienda_has_tarifa.idVivienda','=','vivienda.id')
            ->join('tarifa','vivienda_has_tarifa.idTarifa','=','tarifa.id')
            ->where('vivienda.id','=',$id)
            ->limit(1)
            ->get();
        return $regions;
    }
    static function sitemapID(){
        $sitemap = DB::table('vivienda')
            ->select('vivienda.id')
            ->get();
        return $sitemap;
    }

    static function image($id){
        $foto = DB::table('fotos')
            ->select('fotos.path')
            ->join('vivienda_has_fotos','vivienda_has_fotos.idFoto','=','fotos.id')
            ->where('vivienda_has_fotos.idVivienda','=',$id)
            ->limit(1)
            ->get();
        return $foto;
    }
    static function images($id){
        $fotos = DB::table('fotos')
            ->select('fotos.path')
            ->join('vivienda_has_fotos','vivienda_has_fotos.idFoto','=','fotos.id')
            ->where('vivienda_has_fotos.idVivienda','=',$id)
            ->get();
        return $fotos;
    }

}
