<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Pig Travel</title>
    <link rel="stylesheet" href="/css/app.css">
</head>

<body>
<div id="app"></div>

<div id="modal"></div>

<script src="/js/app.js"></script>
</body>
</html>
