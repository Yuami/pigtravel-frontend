<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Persona extends Model
{
    protected $table = 'persona';


    public function getName($email)
    {
        return Persona::where('email', $email)->first()->correo;
    }
}
