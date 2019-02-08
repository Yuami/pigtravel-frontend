<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Mensaje extends Model
{

    public $table = 'mensajes';

    public $fillable = ['name','email','message'];

}