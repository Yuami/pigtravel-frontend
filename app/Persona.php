<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $table = 'persona';

    protected $guarded = ['id'];

    public $timestamps = false;

    public static function getByCorreo($correo) {
        return Persona::where('correo', $correo)->first();
    }

    public function getName()
    {
        return $this->nombre;
    }

    public function verify(){
        $this->update(['verified' =>  1]);
    }
}
