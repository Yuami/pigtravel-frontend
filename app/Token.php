<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Token extends Model
{
    protected $table = 'token';

    protected $fillable = ['email', 'token', 'type'];

    public static function getByToken($token){
        return Token::where('token',$token)->first();
    }
}
