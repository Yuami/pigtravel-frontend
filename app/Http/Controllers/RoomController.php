<?php
/**
 * Created by PhpStorm.
 * User: ruben
 * Date: 18/02/2019
 * Time: 10:36
 */

namespace App\Http\Controllers;


use Illuminate\Support\Facades\Auth;

class RoomController
{
    public function index()
    {
        dd(Auth::user(), Auth::id(),Auth::logout());
        if (Auth::check())
            return view('welcome');
    }
}