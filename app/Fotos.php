<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fotos extends Model
{
    protected $table = "fotos";
    protected $guarded = ['id'];

    public $timestamps = false;

    public function persona()
    {
        return $this->belongsTo(Persona::class, 'idFoto');
    }
}

