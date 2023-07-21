<?php

function get_wiki_url($name) {
    $people_json = file_get_contents('../people.json');
    $people = json_decode($people_json, true);

    return $people[$name];
}

?>