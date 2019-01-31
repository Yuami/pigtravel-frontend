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

Route::get('/', function () {
    return view('welcome');
});

//Route::get('/test', 'TestController@index');
Route::get('/reservas', 'ReservasController@index');
Route::get('/reservas/{reserva}', 'ReservasController@show');

Route::get('/verify', 'TokenController@index');
Route::get('/gentoken/{email}/{type}', 'TokenController@generate');


Route::post('/receivemail', 'MailController@receive');




Route::get('lang/{lang}', ['as' => 'lang.switch', 'uses' => 'LanguageController@switchLang']);
Route::get('/js/lang.js', function () {

    $minutes = 3600;
    $lang    = App::getLocale();

    $strings = Cache::remember($lang.'.lang.js', $minutes, function() use ($lang) {

        $files   = glob(resource_path('lang/' . $lang . '/*.php'));
        $strings = [];

        foreach ($files as $file) {
            $name           = basename($file, '.php');
            $strings[$name] = require $file;
        }

        return $strings;
    });

    return response('window.lang = ' . json_encode($strings) . ';')->header('Content-Type', 'text/javascript');
})->name('assets.lang');