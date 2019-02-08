<?php
/**
 * Created by PhpStorm.
 * User: Pep Toni
 * Date: 08/02/2019
 * Time: 8:50
 */


namespace App\Http\Controllers;

use App\Mensaje;
use Illuminate\Http\Request;

class MessageController extends Controller {
    public function index()
    {
        return view('welcome');

    }
    public function store(Request $request)

            {
                dd($request->input('email'));
            }
}



