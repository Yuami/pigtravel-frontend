<?php
/**
 * Created by PhpStorm.
 * User: ruben
 * Date: 06/03/2019
 * Time: 10:19
 */

namespace App;


use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{

    protected $table = 'cliente';
    protected $primaryKey = 'idPersona';
    protected $fillable = ['idPersona'];

    public const CREATED_AT = null;

    public const UPDATED_AT = null;


    function reservas()
    {
        return $this->hasMany(Reserva::class, 'idCliente', 'idPersona');
    }
}