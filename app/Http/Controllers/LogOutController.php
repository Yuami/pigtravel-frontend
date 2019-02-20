<?php
/**
 * Created by PhpStorm.
 * User: ruben
 * Date: 18/02/2019
 * Time: 10:36
 */

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class LogOutController
{
    public function index()
    {
        dd(Auth::user(), Session::flush(), Session::save(), Auth::logout());
        if (Auth::check())
            return view('welcome');
    }
}