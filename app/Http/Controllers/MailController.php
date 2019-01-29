<?php

namespace App\Http\Controllers;

use App\Mailer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{
    public function validateEmail()
    {
        Mail::send('Sending emails with Mailgun and Laravel is easy!', function ($message) {
            $message->subject('Mailgun and Laravel are awesome!');
            $message->from('no-reply@website_name.com', 'Website Name');
            $message->to('newtimestube@gmail.com');
        });
    }

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