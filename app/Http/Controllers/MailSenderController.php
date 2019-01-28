<?php
/**
 * Created by PhpStorm.
 * User: Phil
 * Date: 28/01/2019
 * Time: 16:51
 */

namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;

class MailSenderController extends Controller
{
    public function show() {
        echo "nothing to see here";
    }

    public function create() {
        print_r($_POST);
    }
}