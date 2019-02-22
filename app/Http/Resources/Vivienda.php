<?php

namespace App\Http\Resources;

use App\Http\Resources\City as CityResource;
use App\City;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class Vivienda extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request $request
     * @return array
     */
    public function toArray($request)
    {
//        return [
//
//        ];

        return [
            'id' => $this->id,
            'vendedor' => $this->when(Auth::check(), $this->vendedor, $this->idVendedor),
            'nombre' => $this->nombre,
            'capacidad' => $this->capacidad,
            'latitude' => [
                'x' => $this->coordX,
                'y' => $this->coordY,
            ],
            'metrosCuadrados' => $this->metrosCuadrados,
            'calle' => $this->calle,
            'horaEntrada' => $this->horaEntrada,
            'horaSalida' => $this->horaSalida,
            'alquilerAutomatico' => $this->alquilerAutomatico,
            'destacada' => $this->destacada,
            'tipoVivienda' => $this->tipoVivienda,
            'ciudad' => new CityResource(City::find($this->idCiudad)),
            'fotos' => $this->fotos,
            'valoracion' => $this->valoraciones,
            'descripcion' => $this->descripcion,
            'tarifas' => [
                "general" => $this->tarifas,
                'extra' => $this->tarifas->where('general', '!=', 1),
            ],
            'reservas' => Reserva::collection($this->reservas),
            'servicios' => $this->servicios
        ];
    }
}
