<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
use App\Http\Resources\Vivienda as ViviendaResource;
use App\Vivienda;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/cities",function (){
    $cities=\App\Cities::getIfHaveHouses();
    return $cities;
} );
Route::get("/regions",function (){
    $regions=\App\Region::getIfHaveHouses();
    return $regions;
} );
Route::get('/bookings/{id}', function ($id) {
    return \App\Reserva::details($id);
});
Route::get('/houses/{id}', function ($id) {
    return \App\Vivienda::details($id);
});
Route::get('/block/{id}', function ($id) {
    return \App\Reserva::datesByHouse($id);
});

Route::get('/idiomas', function () {
    return \App\Idioma::all();
});

Route::get('/servicio/{id}', function ($id) {
    return \App\ViviendasHasServicio::getByVivienda($id);
});

Route::get('/viviendas/{id}', function($id){
    return \App\Vivienda::find($id);
});

Route::get('/viviendas', function (){
    return ViviendaResource::collection(Vivienda::all());
});

Route::get('/viviendas/{id}', function($id){
    return \App\Vivienda::find($id);
});

Route::post('/reservation', 'ReservasController@store');