<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Cities extends JsonResource
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
            'region' => $this->region,
            'country' => $this->country,
            'latitude' => [
                'x' => $this->latitude,
                'y' => $this->longitude
            ],
            'name' => $this->name
        ];
    }
}
