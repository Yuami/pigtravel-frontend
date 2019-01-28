<?php
/**
 * Created by PhpStorm.
 * User: Phil
 * Date: 28/01/2019
 * Time: 16:51
 */

namespace App\Http\Controllers;

use App\MailReceiver;
use Illuminate\Http\Request;


class MailReceiverController extends Controller
{
    public function create(Request $request) {
        $mail = new MailReceiver;
        $mail->Content_Type = request('Content-Type');
        $mail->Date = request('Date');
        $mail->From = request('From');
        $mail->In_Reply_To = request('In-Reply-To');
        $mail->Subject = request('Subject');
        $mail->to = request('to');
        $mail->body_html = request('body-html');
        $mail->save();
    }
}