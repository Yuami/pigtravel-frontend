<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ImagenController extends Controller
{
    public function persona(Request $request){

        $image = $request->file('select_file');
        $newName = rand() . '.' . $image->getClientOriginalExtension();
        $image->move('/code/lloguer_vacacional/back/public/assets/uploads/img/perfiles/', $newName);

        return back()->with('success', 'Image uploaded!');

    }
}
