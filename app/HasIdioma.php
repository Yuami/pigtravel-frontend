<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class HasIdioma extends Model
{
    protected $appends = ['nombre'];

    protected function getAttributeForeign($name)
    {
        return DB::table($this->table . '_has_idioma')
            ->select($name)
            ->where('id' . ucfirst($this->table), $this->id)
            ->get()
            ->pluck($name)->first();
    }

    public function __call($method, $parameters)
    {
        $name = strtolower(substr($method, 3, -9));
        if (in_array($name, $this->appends)) {
            return $this->getAttributeForeign($name);
        }
        return parent::__call($method, $parameters);
    }
}
