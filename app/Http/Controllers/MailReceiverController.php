<?php
/**
 * Created by PhpStorm.
 * User: Phil
 * Date: 28/01/2019
 * Time: 16:51
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class MailReceiverController extends Controller
{
    public function create() {
        csrf_token();
        return print_r($_POST);
    }
}