<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Mensaje extends Model
{

    public $table = 'mensajes';
    public $timestamps = false;

    public $fillable = ['idSender', 'idReciever', 'idVivienda','idReserva','message'];

}