<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

$name = $_POST['name'];
$phone = $_POST['phone'];
$date = $_POST['date'];
$time = $_POST['time'];
$guest = $_POST['guest'];
$table = $_POST['table'];
$wishes = $_POST['wishes'];
$token = "746587611:AAGQWwF6gI-aolduxr72frF9VXSOc6EmXm8";
$chat_id = "-357496791";
$arr = array(
	  'Имя: ' => $name,
	  'Телефон: ' => $phone,
	  'Число: ' => $date,
		'Время: ' => $time,
		'Гостей: ' => $guest,
		'Стол: ' => $table,
		'Пожелания: ' => $wishes,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

/* if ($sendToTelegram) {
  header('Location: thank-you.html');
} else {
  echo "Error";
} */
?>
