<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>

    <!--datepicker-->
    <script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.min.css"
          rel="stylesheet"/>
    <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />
    <link rel="stylesheet" href="/css/app.css">


    @csrf
    <title>Pig Travel</title>
</head>
<style>
    body#landingBody {
        position: relative;
        background: url({{ asset('img/casa.png') }}) no-repeat center;
        background-size: cover;
        max-height: 600px;
    }

    .jumbotron_cont {
        position: relative;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        min-height: 78vh;
    }

    .buscador {
        background-color: white;
        padding: 0px;
        margin: auto;
    }


    .boton {
        border-radius: 0px;
        width: 100%;
        background-color: #FA6839;
    }

    .HeadLine {
        text-align: center;
        color: white;
    }

    .filtros {
        padding: 0px;
        color: white;
    }

   ::placeholder{
       color:black !important;

   }


    .inputContainer label {
        float: left;
        margin-right: 5px;
        margin-top: 25px;
        text-align: center;

    }
    .inputContainer div {
        overflow: hidden;
    }
    .inputContainer input,select {
        width: 100%;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        display: block;
        height: 70px;
        font-size: 14pt;
        border: none;
    }
    .inputContainer button {
        height: 70px;
        border: none;
        color: white;
        width: 100%;
        font-size: 14pt;
        padding-left: 0px;
        padding-right: 0px;
    }



</style>
</head>

<body id="landingBody">
<header id="header">
</header>
    <div class="view">
        <h1 class="HeadLine">RESERVA APARTAMENTOS EN TODO EL MUNDO</h1>
        <div class="Jumbotron">
            <div class="jumbotron_cont" id="searcher">
            </div>
            <div id="date"></div>
        </div>
    </div>
<div class="container index">
    <h2 style="text-align: center">Te recomendamos</h2>

</div>

<script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.13.0/umd/popper.min.js"></script>
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js"></script>
<script src="/js/app.js"></script>
</body>
</html>
