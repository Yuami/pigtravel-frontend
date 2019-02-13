<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ViviendaHasFotos extends Model
{
    protected $table = "vivienda_has_fotos";

    protected $primaryKey = ["idVivienda", "idFoto"];
    public $incrementing = false;

    protected $fillable = ["idVivienda", "idFoto", "posicion"];
    protected $appends = ["path"];

    public function foto()
    {
        return $this->hasOne(Fotos::class, "id", "idFoto");
    }

    public function getPathAttribute()
    {
        return $this->foto->path;
    }
}
