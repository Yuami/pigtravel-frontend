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
<<<<<<< HEAD
Route::get('/reservas', 'ReservasController@show');
=======
Auth::routes();
Route::get('/reservas', 'ReservasController@index');
>>>>>>> a95885beaa5b2a62eb35d8b326a44f3a09265b51
Route::get('/reservas/{reserva}', 'ReservasController@show');

Route::get('/verify', 'TokenController@index');
Route::get('/gentoken/{email}/{type}', 'TokenController@generate');


Route::post('/receivemail', 'MailController@receive');

Route::get('/{any}','IndexController@index')->where('any', '.*');
