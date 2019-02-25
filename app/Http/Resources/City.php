<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class City extends JsonResource
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
            'id' => $this->id,
            'region' => $this->region_id,
            'pais' => $this->country_id,
            'latitude' => [
                'x' => $this->latitude,
                'y' => $this->longitude
            ],
            'nombre' => $this->name
        ];
    }
}
