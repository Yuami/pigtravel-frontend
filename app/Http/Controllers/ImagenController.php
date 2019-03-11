<?php

namespace App\Http\Controllers;

use App\Fotos;
use App\Persona;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ImagenController extends Controller
{
    public function persona($id, Request $request)
    {

        $this->validate($request,
            ['file'
            => 'required|image|mimes:jpeg,png,jpg,gif'
            ]);

        $image = $request->file('file');
        $newName = rand() . str_replace(' ', '', now()) . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('images'), $newName);

        DB::transaction(function() use ($newName, $id){
            $foto = new Fotos();
            $foto->path = '/images/' .  $newName;
            $foto->back = 0;
            $foto->save();

            $user = Persona::find($id);
            $user->idFoto = $foto->id;
            $user->save();
        });

        return back()->with('success', 'Image uploaded!');

    }
}
