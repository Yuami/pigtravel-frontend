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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/cities",function (){
    $cities=\App\City::getIfHaveHouses();
    return $cities;
} );
Route::get("/regions",function (){
    $regions=\App\Region::getIfHaveHouses();
    return $regions;
} );
Route::get('/blocks/{id}', function ($id) {
    return \App\Reserva::datesByHouse($id);
});
Route::get('/states', function () {
    return \App\Estados::statesByLanguage();
});
Route::get('/bookings/{id}', function ($id) {
    return \App\Reserva::details($id);
});
Route::get('/houses/{id}', function ($id) {
    return \App\Vivienda::details($id);
});
Route::get('/houseImages/{id}', function ($id) {
    return \App\Vivienda::images($id);
});
Route::get('/reviews/{id}', function ($id) {
    return \App\ValoracionVivienda::vvById($id);
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

Route::get('/viviendas', "ViviendaController@index");

Route::get('/viviendas/{id}', function($id){
    return new \App\Http\Resources\Vivienda(\App\Vivienda::find($id));
});

Route::post('/locale/{locale}', 'LocaleController@change');

Route::get('/locale', 'LocaleController@index');

Route::post('/reservation', 'ReservasController@store');