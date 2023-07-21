<?php

require '../cors.php';
cors();

require 'is_dead.php';
require 'get_wiki_url.php';

$name = $_GET['name'];
$url = get_wiki_url($name);
$is_dead = is_dead($url);

echo $is_dead;

?>