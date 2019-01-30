<?php

namespace App\Http\Controllers;

use App\Mailer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function receive(Request $request)
    {
        $mail = new Mail;
        $mail->Content_Type = request('Content-Type');
        $mail->Date = request('Date');
        $mail->From = request('From');
        $mail->In_Reply_To = request('In-Reply-To');
        $mail->Subject = request('Subject');
        $mail->to = request('To');
        $mail->body_html = request('body-html');
        $mail->save();
    }
}