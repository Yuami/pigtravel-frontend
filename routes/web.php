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
Route::get('/logout', 'Auth\LoginController@logout');
Route::get('/bookings/{idReserva}', 'ReservasController@show');

Route::get('/verify', 'TokenController@index');
Route::get('/recover', 'TokenController@recover');
Route::post('/recover', 'TokenController@change');
Route::get('/gentoken/{email}/{type}', 'TokenController@generate');


Route::post('/receivemail', 'MailController@receive');
Route::get('/sitemap.xml', 'SitemapController@sitemap');
Route::get('/sitemap/houses', 'SitemapController@houses');
Route::get('/{any}', 'IndexController@index')->where('any', '.*');

