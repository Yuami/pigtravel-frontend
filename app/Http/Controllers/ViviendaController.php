<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\ViviendaCollection as ViviendaCollection;
use \App\Http\Resources\Vivienda as ViviendaResource;
use App\Vivienda;

class ViviendaController extends Controller
{

    public static function filterBy($params)
    {
        $v = Vivienda::query();

        if (isset($params["place"])) {
            if ($params["place"] < 3000) {
                $v->join('cities', 'cities.id', 'vivienda.idCiudad');
                $v->where('cities.region_id', $params["place"]);
            } else {
                $v->where('vivienda.idCiudad', $params['place']);
            }
        }
        $v->whereDoesntHave('reservas', function ($query) use ($params)
        {
            $query->where('reserva.checkin', '<', $params["end"])->where('reserva.checkout', '>', $params["start"]);
        });

        $v->where('vivienda.capacidad', '>=', $params['guests']);
        return $v->has("tarifas");
    }

    /**
     * Display a listing of the resource.
     *
     * @return ViviendaCollection
     */
    public function index(Request $request)
    {
        if (empty($request->all())) return new ViviendaCollection(Vivienda::all());

        $params = $request->validate([
            'start' => 'required|date|after_or_equal:today',
            'end' => 'required|date|after:start',
            'guests' => 'numeric',
            'place' => 'numeric',
        ]);

        if (!isset($params["guests"])) $params["guests"] = 1;
        $v = self::filterBy($params);
        $viviendas = new ViviendaCollection($v->get(['vivienda.*']));
        $filteredViviendas = $viviendas->reject(function ($vivienda) use ($params)
        {
            return  $vivienda->rejectableByDates($params["start"], $params["end"]);
        });

        return new ViviendaCollection($filteredViviendas);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new ViviendaResource(Vivienda::find($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
