<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ValoracionViviendaHasTipo extends HasIdioma
{
    protected $table = "valoracion_has_tipo_valoracion";
    protected $primaryKey = ["idValoracion", "idTipoValoracion"];
}
