<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker.min.css"
          rel="stylesheet"/>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6/jquery.min.js" type="text/javascript"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js" type="text/javascript"></script>
    <link href="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/themes/start/jquery-ui.css" rel="Stylesheet"
          type="text/css"/>
    <script type="text/javascript" src="//cdn.jsdelivr.net/jquery/1/jquery.min.js"></script>
    <script type="text/javascript" src="//cdn.jsdelivr.net/momentjs/latest/moment.min.js"></script>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap/3/css/bootstrap.css" />
    <script type="text/javascript" src="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.js"></script>
    <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/bootstrap.daterangepicker/2/daterangepicker.css" />
    @csrf
    <title>Pig Travel</title>
    <link rel="stylesheet" href="/css/app.css">
</head>
<style>

    html, body {
        background-color: #fff;
        color: #636b6f;
        font-family: 'Nunito', sans-serif;
        font-weight: 200;
        height: 100vh;
        margin: 0;
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
        background-color: rgba(255, 255, 255);
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
    html,
    body,
    .view {
        background-image: url({{ asset('img/casa.png') }});
        background-repeat: no-repeat;
        background-size: 100%;
    }

    .index {
        margin-top: 5%;
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



    @media (min-width: 768px) {
        .carousel-inner .active,
        .carousel-inner .active + .carousel-item,
        .carousel-inner .active + .carousel-item + .carousel-item,
        .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {
            display: block;
        }

        .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),
        .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item,
        .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item,
        .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item {
            transition: none;
        }

        .carousel-inner .carousel-item-next,
        .carousel-inner .carousel-item-prev {
            position: relative;
            transform: translate3d(0, 0, 0);
        }

        .carousel-inner .active.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
            position: absolute;
            top: 0;
            right: -25%;
            z-index: -1;
            display: block;
            visibility: visible;
        }

        .active.carousel-item-left + .carousel-item-next.carousel-item-left,
        .carousel-item-next.carousel-item-left + .carousel-item,
        .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item,
        .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item,
        .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
            position: relative;
            transform: translate3d(-100%, 0, 0);
            visibility: visible;
        }

        .carousel-inner .carousel-item-prev.carousel-item-right {
            position: absolute;
            top: 0;
            left: 0;
            z-index: -1;
            display: block;
            visibility: visible;
        }

        .active.carousel-item-right + .carousel-item-prev.carousel-item-right,
        .carousel-item-prev.carousel-item-right + .carousel-item,
        .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item,
        .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item,
        .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item {
            position: relative;
            transform: translate3d(100%, 0, 0);
            visibility: visible;
            display: block;
            visibility: visible;
        }
    }

</style>
</head>

<body>
<header>
    <div class="view">
        <h1 class="HeadLine">RESERVA APARTAMENTOS EN TODO EL MUNDO</h1>
        <div class="Jumbotron">
            <div class="jumbotron_cont">
                <div class="buscador col-lg-8">
                     <div class="inputContainer col-lg-4">
                        <label><i class="fa fa-globe"></i></label>
                        <div><input class="form-control" id="autocomplete" type="text" placeholder="¿Donde quieres ir?" name="location"></div>
                    </div>
                    <div class="inputContainer col-lg-4">
                        <div>
                          <label><i class="fa fa-calendar"></i></label>
                          <div><input class="form-control" id="demo" name="datefilter" type="button"  value="Entrada"></div>
                        </div>
                    </div>
                    <div class="inputContainer col-lg-3">
                        <label><i class="fa fa-user"></i></label>
                        <div>
                            <select>
                                <option value="" selected>Huespedes</option>
                                <option value="1">1 Huesped</option>
                                <option value="2">2 Huespedes</option>
                                <option value="3">3 Huespedes</option>
                            </select>
                        </div>
                    </div>

                    <div class="inputContainer col-lg-1">
                        <button type="button" class="btn boton"><i class="fa fa-search fa-2x "></i></button>
                    </div>
                </div>


            </div>
        </div>
    </div>
</header>
<div class="container index">
    <h2 style="text-align: center">Te recomendamos</h2>

    <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="9000">
        <div class="carousel-inner row mx-auto" role="listbox">
            <div class="carousel-item col-md-3 active">
                <div class="card">
                    <img class="card-img-top img-fluid" src="http://placehold.it/300x200/418cf4/fff"
                         alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Mallorca</h4>
                        <p class="card-text">España</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item col-md-3">
                <div class="card">
                    <img class="card-img-top img-fluid" src="http://placehold.it/300x200/418cf4/fff"
                         alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Mallorca</h4>
                        <p class="card-text">España</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item col-md-3">
                <div class="card">
                    <img class="card-img-top img-fluid" src="http://placehold.it/300x200/418cf4/fff"
                         alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Mallorca</h4>
                        <p class="card-text">España</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item col-md-3">
                <div class="card">
                    <img class="card-img-top img-fluid" src="http://placehold.it/300x200/418cf4/fff"
                         alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Mallorca</h4>
                        <p class="card-text">España</p>
                    </div>
                </div>
            </div>
            <div class="carousel-item col-md-3">
                <div class="card">
                    <img class="card-img-top img-fluid" src="http://placehold.it/300x200/418cf4/fff"
                         alt="Card image cap">
                    <div class="card-body">
                        <h4 class="card-title">Mallorca</h4>
                        <p class="card-text">España</p>
                    </div>
                </div>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
            <i class="fa fa-chevron-left fa-lg text-muted"></i>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
            <i class="fa fa-chevron-right fa-lg text-muted"></i>
            <span class="sr-only">Next</span>
        </a>

    </div>

</div>

<script type="text/javascript">
    var today = new Date();
    $('#demo').daterangepicker({
        "showISOWeekNumbers": true,
        "autoUpdateInput": true,
        "locale": {
            "cancelLabel": 'Clear',
            "format": "DD/MMMM",
            "separator": "-",
            "applyLabel": "Apply",
            "cancelLabel": "Cancel",
            "fromLabel": "From",
            "toLabel": "To",
            "customRangeLabel": "Custom",
            "weekLabel": "W",
            "daysOfWeek": [
                "Lun",
                "Mar",
                "Mie",
                "Jue",
                "Vie",
                "Sab",
                "Dom"
            ],  "monthNames": [
                "Enero",
                "Febrero",
                "Marzo",
                "Abril",
                "Mayo",
                "Junio",
                "Julio",
                "Agosto",
                "Septiembre",
                "Octubre",
                "Noviembre",
                "Diciembre"
            ],
            "firstDay": 1
        },
        "linkedCalendars": true,
        "showCustomRangeLabel": false,
        "startDate": today.setDate(today.getDate() + 1),
        "endDate": today,
        "opens": "center"
    });
    $('#carouselExample').on('slide.bs.carousel', function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 4;
        var totalItems = $('.carousel-item').length;
        if (totalItems > itemsPerSlide) {
            if (idx >= totalItems - (itemsPerSlide - 1)) {
                var it = itemsPerSlide - (totalItems - idx);
                for (var i = 0; i < it; i++) {
                    if (e.direction == "left") {
                        $('.carousel-item').eq(i).appendTo('.carousel-inner');
                    } else {
                        $('.carousel-item').eq(0).appendTo('.carousel-inner');
                    }
                }
            }
        }
    });
</script>

<div id="app"></div>
<script src="/js/app.js"></script>

</body>
</html>
