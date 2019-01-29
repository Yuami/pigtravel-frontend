<?php
/**
 * Created by PhpStorm.
 * User: Phil
 * Date: 28/01/2019
 * Time: 16:51
 */

namespace App\Http\Controllers\Mail;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;


class MailSenderController extends Controller
{
    public function index() {
        Mail::raw('Sending emails with Mailgun and Laravel is easy!', function($message)
        {
            $message->subject('Mailgun and Laravel are awesome!');
            $message->from('no-reply@website_name.com', 'Website Name');
            $message->to('newtimestube@gmail.com');
        });
    }
}