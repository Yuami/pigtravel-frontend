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
            "estados" => [
                "ultimo" => $this->lastEstado,
                "todos" => $this->estados
            ]
        ];
    }
}
