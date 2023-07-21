<?php

require '../cors.php';
cors();

$people_json = file_get_contents('../people.json');
$people = json_decode($people_json, true);

echo json_encode(array_keys($people));

?>