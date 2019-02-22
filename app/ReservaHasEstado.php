<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ReservaHasEstado extends Model
{
    protected $table = "reserva_has_estado";
    protected $primaryKey = ["idReserva", "idEstado"];

    public function reserva()
    {
        return $this->belongsTo(Reserva::class, 'id','idReserva');
    }

    public function estado()
    {
        return $this->belongsTo(Estado::class, 'id', 'idEstado');
    }
}
