<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Fotos extends Model
{
    protected $table = "fotos";
    protected $fillable = ["path"];
}

