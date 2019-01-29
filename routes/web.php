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

Route::get('/send_test_email', function(){
    Mail::raw('Hello Phil, please verify your account!', function($message)
    {
        $message->subject('Verify your PigTravel Account!');
        $message->from('no-reply@pigtravel.top', 'PigTravel');
        $message->to('newtimestube@gmail.com');
    });
});

Route::get('/test', 'TestController@index');
Route::get('/reservas', 'ReservasController@index');
Route::get('/reservas/{reserva}', 'ReservasController@show');
Route::get('/verify', 'Token@show');
Route::get('/mailsender', 'Mail\MailSenderController@index');
Route::post('/mailreceiver', 'Mail\MailReceiverController@create');
