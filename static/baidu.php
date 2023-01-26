<?php 

$urls = array(

    'https://www.shaking.site/',

    'https://www.shaking.site/Hello-Blog',

    'https://www.shaking.site/docs/Docusaurus-guides',

    'https://www.shaking.site/about',

);

$api = 'http://data.zz.baidu.com/urls?site=https://www.shaking.site&token=IxxtdEaM1M97FAsU';

$ch = curl_init();

$options =  array(

    CURLOPT_URL => $api,

    CURLOPT_POST => true,

    CURLOPT_RETURNTRANSFER => true,

    CURLOPT_POSTFIELDS => implode("\n", $urls),

    CURLOPT_HTTPHEADER => array('Content-Type: text/plain'),

);

curl_setopt_array($ch, $options);

$result = curl_exec($ch);

echo $result;

?>