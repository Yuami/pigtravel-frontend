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
    $cities=\App\Cities::getIfHave();
    return $cities;
} );
Route::get("/regions",function (){
    $regions=\App\Region::getIfHave();
    return $regions;
} );
Route::get('/bookings', function () {
    $booking=\App\Reserva::details();
    return $booking;
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