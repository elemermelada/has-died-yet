<?php

function is_dead($url) {
    if (is_null($url)) {
        return 'null';
    }
    $page = file_get_contents($url);
    $is_alive_en = stripos($page, '<th scope="row" class="infobox-label">Died</th>') === false;
    $is_alive_es = stripos($page, '<th scope="row" style="text-align:left;font-size: 92%; width: 37%;;">Fallecimiento</th>') === false;
    $is_alive = $is_alive_en and $is_alive_en;
    if ($is_alive) {
        return 'false';
    }
    return 'true';
}

?>