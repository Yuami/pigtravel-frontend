<?php

namespace App\Http\Controllers\Auth;

use App\Persona;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'nombre' => ['string', 'max:255'],
            'apellido1' => [ 'string', 'max:255'],
            'apellido2' => ['string', 'max:255'],
            'tlf' => ['int', 'max:255'],
            'fechaN' => ['date', 'max:255'],
            'dni' => ['string', 'max:255'],
            'correo' => ['string', 'email', 'max:255', 'unique:users'],
            'password' => ['string', 'confirmed'],
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        dd('create');
        return Persona::create([
            'nombre' => $data['nombre'],
            'apellido1' => $data['apellido1'],
            'apellido2' => $data['apellido2'],
            'dni' => $data['dni'],
            'tlf' => $data['tlf'],
            'correo' => $data['correo'],
            'fechaNacimineto' => $data['fechaN'],
            'descripcion' => $data['descripcion'],
            'idCiudad' => $data['idCiudad'],
            'idFoto' => $data['idFoto'],
            'password' => Hash::make($data['password'], [
                'memory' => 1024,
                'time' => 2,
                'threads' => 2
            ]),
        ]);
    }
}
