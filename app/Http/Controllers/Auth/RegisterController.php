<?php

namespace App\Http\Controllers\Auth;

use App\User;
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
            'nombre' => ['required', 'string', 'max:255'],
            'ap1' => ['required', 'string', 'max:255'],
            'ap2' => ['required', 'string', 'max:255'],
            'dni' => ['required', 'string', 'max:255'],
            'tlf' => ['required', 'integer', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
            'fechaN' => ['required', 'date'],
            'desc' => ['string', 'max:255'],
            'idC' => ['string', 'max:255'],
            'idF' => ['string', 'max:255']
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
        $data = $data['values'];
        return User::create([
            'nombre' => $data['nombre'],
            'apellido1' => $data['ap1'],
            'apellido2' => $data['ap2'],
            'DNI' => $data['dni'],
            'tlf' => $data['tlf'],
            'correo' => $data['email'],
            'password' => Hash::make($data['password'], [
                'memory' => 1024,
                'time' => 2,
                'threads' => 2]),
            'fechaNacimiento' => $data['fechaN'],
            'descripcion' => $data['desc'],
            'idCiudad' => $data['idC'],
            'idFoto' => $data['idF'],
        ]);
    }
}
