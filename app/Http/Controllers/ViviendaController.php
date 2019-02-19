<?php

namespace App\Http\Controllers;

use Illuminate\Database\Query\Builder;
use Illuminate\Http\Request;
use App\Http\Resources\Vivienda as ViviendaResource;
use App\Http\Resources\ViviendaCollection as ViviendaCollection;
use App\Vivienda;

class ViviendaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return ViviendaCollection
     */
    public function index(Request $request)
    {
        $params = $request->validate([
            'start' => 'required|date|after_or_equal:today',
            'end' => 'required|date|after:start',
            'guests' => 'required|numeric',
            'place' => 'numeric',
        ]);

        $v = self::filterBy($params);
        return new ViviendaCollection($v->get());
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
        //
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

    public static function filterBy($params)
    {
        if (!isset($params['place']))
            $v = Vivienda::where('capacidad', '>=', $params['guests']);
        elseif ($params["place"] < 3000) {
            $v = Vivienda::with(['city.region' => function ($query) use ($params)
            {
                $query->where('regions.id', $params["place"]);
            }])->where('capacidad', '>=', $params['guests']);
        } else {
            $v = Vivienda::where([
                ['capacidad', '>=', $params['guests']],
                ['idCiudad', $params['place']],
            ]);
        }
        return $v;
    }
}
