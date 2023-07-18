<?php

function is_dead($url) {
    if (is_null($url)) {
        return "?";
    }
    $page = file_get_contents($url);
    if (stripos($page, '<th scope="row" class="infobox-label">Died</th>') === false) {
        return "";
    }
    return "☠";
}

$people = array(
    "Kirk Douglas" => "https://en.wikipedia.org/wiki/Kirk_Douglas",
    "Felipe de Edimburgo" => "https://en.wikipedia.org/wiki/Prince_Philip,_Duke_of_Edinburgh",
    "Kissinger" => "https://en.wikipedia.org/wiki/Henry_Kissinger",
    "Mugabe" => "https://en.wikipedia.org/wiki/Robert_Mugabe",
    "Jimmy Carter" => "https://en.wikipedia.org/wiki/Jimmy_Carter",
    "Reina Isabel II" => "https://en.wikipedia.org/wiki/Elizabeth_II",
    "David Attenborough" => "https://en.wikipedia.org/wiki/David_Attenborough",
    "Benedicto XVI" => "https://en.wikipedia.org/wiki/Pope_Benedict_XVI",
    "Chomsky" => "https://en.wikipedia.org/wiki/Noam_Chomsky",
    "Habermas" => "https://en.wikipedia.org/wiki/J%C3%BCrgen_Habermas",
    "Clint Eastwood" => "https://en.wikipedia.org/wiki/Clint_Eastwood",
    "Pujol" => "https://en.wikipedia.org/wiki/Jordi_Pujol",
    "Omara Portuondo" => "https://en.wikipedia.org/wiki/Omara_Portuondo",
    "Charles Taylor" => "https://en.wikipedia.org/wiki/Charles_Taylor_(philosopher)",
    "Little Richard" => "https://en.wikipedia.org/wiki/Little_Richard",
    "Josep Maria Vegara" => null,
    "Sabina" => "https://en.wikipedia.org/wiki/Joaqu%C3%ADn_Sabina",
    "Vallespín" => null,
);

echo '<table>';

foreach ($people as $name => $url) {
    $is_dead = is_dead($url);
    echo '<tr>';
    echo "<th><a href=\"$url\">$name</a></th>";
    echo "<th>$is_dead</th>";
    echo '</tr>';
}

echo '</table>';

?>