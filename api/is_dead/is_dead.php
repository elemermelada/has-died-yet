<?php

function is_dead($url) {
    $result = array(
        'is_dead' => null,
        'date' => null
    );

    if (is_null($url)) {
        return $result;
    }
    $page = file_get_contents($url);
    $index_en = stripos($page, '<th scope="row" class="infobox-label">Died</th>');
    $index_es = stripos($page, '<th scope="row" style="text-align:left;font-size: 92%; width: 37%;;">Fallecimiento</th>') === false;
    
    $is_alive_en = $index_en === false;
    $is_alive_es = $index_es === false;
    $is_alive = $is_alive_en and $is_alive_en;
    if ($is_alive) {
        $result['is_dead'] = false;
        return $result;
    }

    if (!$is_alive_en) {
        $result['is_dead'] = true;
        $date = substr($page, $index_en + 72);
        $date_end = stripos($date, '<span style="display:none">');
        $date = substr($date, 0, $date_end);
        $result['date'] = $date;

        return $result;
    }
}

?>