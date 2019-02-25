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
Route::get('/bookings', 'ReservasController@index');
Route::get('/logout', 'LogOutController@index');
Route::get('/houses/{id}','ReservasController@index');
Route::get('/bookings/{idReserva}', 'ReservasController@show');

Route::get('/verify', 'TokenController@index');

Route::post('/receivemail', 'MailController@receive');

Route::get('/{any}','IndexController@index')->where('any', '.*');

