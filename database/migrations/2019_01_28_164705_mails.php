<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Mails extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mails', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Content_Type')->nullable();
            $table->string('Date')->nullable();
            $table->string('From')->nullable();
            $table->string('In_Reply_To')->nullable();
            $table->string('Subject')->nullable();
            $table->string('to')->nullable();
            $table->string('body_html')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
