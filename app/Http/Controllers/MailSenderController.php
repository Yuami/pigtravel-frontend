<?php
/**
 * Created by PhpStorm.
 * User: Phil
 * Date: 28/01/2019
 * Time: 16:51
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class MailSenderController extends Controller
{
    public function create() {
        return print_r($_POST);
    }
}