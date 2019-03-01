<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReservaHasEstado extends Model
{
    protected $table = "reserva_has_estado";
    protected $primaryKey = ["idReserva", "idEstado"];
    protected $guarded = [];

    const UPDATED_AT = 'fechaCambio';
    const CREATED_AT = 'fechaCambio';

    public function reserva()
    {
        return $this->belongsTo(Reserva::class, 'id','idReserva');
    }

    public function estado()
    {
        return $this->belongsTo(Estado::class, 'id', 'idEstado');
    }
}
