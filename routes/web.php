<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();
Route::get('/reservas', 'ReservasController@index');

Route::get('/reservas', 'ReservasController@show');

Route::get('/reservas/{reserva}', 'ReservasController@show');

Route::get('/verify', 'TokenController@index');
Route::get('/gentoken/{email}/{type}', 'TokenController@generate');


Route::post('/receivemail', 'MailController@receive');

Route::get('/{any}','IndexController@index')->where('any', '.*');
