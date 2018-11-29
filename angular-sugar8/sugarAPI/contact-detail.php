<?php

$access_token = $_POST['access_token'];

$contact_id = $_POST['contact_id'];
//$offset_records = $_POST['next_offset'];



//echo $formdataObj;

$instance_url = 'https://staging.rtlabs.co.uk:44367/rest/v11_1';
/* Authentication End*/


$filter_url = $instance_url . "/Contacts/{$contact_id}";

$filter_arguments = array(
    "offset" => 0,
    "max_num" => 5,
);

   

$filter_request = curl_init($filter_url);
curl_setopt($filter_request, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
curl_setopt($filter_request, CURLOPT_HEADER, false);
curl_setopt($filter_request, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($filter_request, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($filter_request, CURLOPT_FOLLOWLOCATION, 0);
curl_setopt($filter_request, CURLOPT_HTTPHEADER, array(
    "Content-Type: application/json",
    "OAuth-Token: {$access_token}"
    
));


//echo '<pre>'; print_r($AuthToken->access_token); echo '</pre>';
//convert arguments to json

$json_arguments = json_encode($filter_arguments);
//$json_arguments = json_encode($filter_arguments);
//curl_setopt($filter_request, CURLOPT_POSTFIELDS, $json_arguments);

//execute request
$filter_response = curl_exec($filter_request);

//$filter_request;

//decode json
//$filter_response_obj = json_decode($filter_response);

echo $filter_response;

// session_destroy();

