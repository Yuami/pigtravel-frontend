<?php

namespace App\Http\Controllers\Auth;

use App\Cliente;
use App\Http\Controllers\TokenController;
use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
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

    public function showRegistrationForm()
    {
        return view('welcome');
    }

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
            'nombre' => ['', 'string', 'max:255'],
            'ap1' => ['', 'string', 'max:255'],
            'ap2' => ['', 'string', 'max:255'],
            'dni' => ['', 'string', 'max:255'],
            'tlf' => ['', 'integer', 'max:255'],
            'email' => ['', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['', 'string', 'min:6', 'confirmed'],
            'fechaN' => ['', 'date'],
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
        $user = User::create([
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
            'idC' => $data['idC'],
            'idF' => $data['idF'],
        ]);
        Cliente::create([
            'idPersona' => $user->id
        ]);

        $user->createAsStripeCustomer();

        TokenController::generate($data['email'], 'verifyAcc');
        return $user;
    }

    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        $this->guard()->login($user);

        return $this->registered($request, $user)
            ?: redirect($this->redirectPath());
    }
}
