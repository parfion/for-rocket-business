<?php

error_reporting(0);
$to = "rbru-metrika@yandex.ru";
$name = $_POST['name'];
$from = trim($_POST['email']);
$message = htmlspecialchars($_POST['message']);
$message = urldecode($message);
$message = trim($message);

$headers = "From: $from" . "\r\n" .
"Reply-To: $from" . "\r\n" .
"X-Mailer: PHP/" . phpversion();

if(mail($to, $message, $headers)) {
  echo 'Письмо отправлено';
} else {
  echo 'Письмо не отправлено';
};

?>