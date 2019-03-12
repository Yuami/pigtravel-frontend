<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\DB;
use Laravel\Cashier\Billable;

class User extends Authenticatable
{
    use Notifiable, Billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    public $timestamps = false;
    protected $table = 'persona';
    protected $fillable = [
        'nombre', 'apellido1', 'apellido2',
        'DNI', 'tlf', 'correo', 'password',
        'fechaNacimiento', 'descripcion', 'idCiudad', 'idFoto'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];
    static function images($id){

        $fotos = DB::table('fotos')
            ->select('fotos.path')
            ->join('persona','persona.idFoto','=','fotos.id')
            ->where('persona.id','=',$id)
            ->get();
        return $fotos;
    }
}
