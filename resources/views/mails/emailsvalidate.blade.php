<?php
$verifyUrl = "http://" . $_SERVER['HTTP_HOST'] . "/verify?token=" . $token;
?>

<h1>Hi, {{ $email }}</h1>
<p>Your Token is: <a href="<?= $verifyUrl ?>"><?= $verifyUrl ?></a></p>
