<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class ReservaHasEstadoInsert extends Model
{
    protected $table = 'reserva_has_estado';
    const CREATED_AT = 'fechaCambio';
    const UPDATED_AT = 'fechaCambio';
}
