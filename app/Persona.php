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

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre', 'apellido1', 'apellido2',
        'DNI', 'tlf', 'correo', 'password',
        'fechaNacimiento', 'descripcion', 'idCiudad', 'idFoto', 'verified'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */

    protected $hidden = [
        'password', 'remember_token',
    ];
//    protected $appends = [
//        'foto'
//    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

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
        return $this->update(['verified' => 1]);
    }

    public function viviendas()
    {
        return $this->hasManyThrough(Vivienda::class, Vendedor::class, 'idPersona', 'idVendedor');
    }

    public function foto()
    {
        return $this->hasOne(Fotos::class, 'id','idFoto');
    }
}
