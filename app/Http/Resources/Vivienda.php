<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;

class Vivienda extends JsonResource
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'vendedor' =>  $this->when(Auth::user(), $this->vendedor, $this->idVendedor),
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
            'ciudad' => $this->idCiudad,
            'fotos' => $this->fotos,
            'valoracion' => $this->valoraciones,
            'descripcion' => $this->descripcion,
            'tarifas' => [
                "general" => $this->tarifas->firstWhere('general', 1),
                'extra' => $this->tarifas->where('general', '!=', 1),
            ],
            'backlink' => env("BACKDOMAIN")
        ];    }
}
