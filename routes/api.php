<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::get('/test', function () {
    return \App\TipoVivienda::all();
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get("/cities",function (){
    return \App\Cities::getIfHaveHouses();
} );
Route::get("/regions",function (){
    return\App\Region::getIfHaveHouses();
} );
Route::get('/bookings/{id}', function ($id) {
    return \App\Reserva::all()->where('id','=',$id);
});

Route::get('/idiomas', function () {
    return \App\Idioma::all();
});

Route::get('/servicio/{id}', function ($id) {
    return \App\ViviendasHasServicio::getByVivienda($id);
});

Route::get('/search', function (){
});

Route::get('/viviendas/{id}', function($id){
    return \App\Vivienda::find($id);
});