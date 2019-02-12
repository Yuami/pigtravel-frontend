<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;


class Persona extends Authenticatable
{
    use Notifiable;

    protected $table = 'persona';

    protected $guarded = ['id'];
    protected $fillable = [
        'nombre', 'apellido1', 'apellido2', 'dni', 'tlf',
        'correo', 'fechaNacimiento', 'descripcion', 'password', 'idCiudad', 'idFoto'
    ];

    protected $hidden = ["password"];

    public $timestamps = false;

    public static function getByCorreo($correo)
    {
        return Persona::where('correo', $correo)->first();
    }

    public function getName()
    {
        return $this->nombre;
    }

    public function verify()
    {
        $this->update(['verified' => 1]);
    }

    public function viviendas()
    {
        return $this->hasManyThrough(Vivienda::class, Vendedor::class, 'idPersona','idVendedor');
    }

    public function getFotoAttribute()
    {
    }
}
