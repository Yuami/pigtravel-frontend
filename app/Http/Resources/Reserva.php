<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Reserva extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "checkIn" => $this->checkIn,
            "checkOut" => $this->checkOut,
            "fecha" => $this->fechaReserva,
            "idVivienda" => $this->idVivienda,
            "pax" => $this->totalClientes,
            "total" => $this->precio,
            "cliente" => $this->idCliente,
            "clientes" => $this->totalClientes,
            "idMetodoPago" => $this->idMetodoPago,
            "estados" => [
                "ultimo" => $this->lastEstado,
                "todos" => $this->estados
            ],
        ];
    }
}
