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

Route::get("/cities", function () {
    return \App\City::getIfHaveHouses();
});

Route::get("/cities/{id}", function ($id) {
    return \App\City::findOrFail($id);
});

Route::get("/regions", function () {
    return \App\Region::getIfHaveHouses();
});

Route::get("/regions/{id}", function ($id) {
    return \App\Region::findOrFail($id);
});

Route::get('/blocks/{id}', function ($id) {
    return \App\Reserva::datesByHouse($id);
});
Route::get('/states', function () {
    return \App\Estados::statesByLanguage();
});
Route::get('/fotoPerfil/{id}', function ($id) {
    return \App\User::images($id);
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

Route::get('/auth', function () {
    return json_encode(auth()->check());
});
Route::get('/auth/id', function () {
    return json_encode(auth()->id());
});

Route::get('/persona/{id}/img', function ($id) {
    $foto = \App\Persona::find($id)->foto;

    if ($foto == null) {
        $foto = [
            "id" => null,
            "path" => "/assets/uploads/img/perfiles/default-image.png"
        ];
    }

    return [
        'foto' => $foto,
        'back' => env('BACKDOMAIN')
    ];
});
Route::get('/viviendas', "ViviendaController@index");

Route::get('/viviendas/{id}', "ViviendaController@show");

Route::get('/viviendas/{id}/servicios', function ($id){
    return \App\ViviendasHasServicio::getByVivienda($id);
});

Route::get('/servicios', function (){ return \App\Servicio::all();});

Route::get('/servicios/{id}', function ($id){ return \App\Servicio::findOrFail($id);});

Route::post('/locale', 'LocaleController@change');

Route::get('/locale', 'LocaleController@index');

Route::post('/reservation', 'ReservasController@store');

Route::post('/profile/{id}/img', 'ImagenController@Persona');