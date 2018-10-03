<?php


/* Authentication Start*/

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

if(empty($obj['user_name']) || empty($obj['password'])){
	echo '';
	return;
}
$instance_url = 'https://staging.rtlabs.co.uk:44367/rest/v11_1';
//$username = 'admin2';
$username = $obj['user_name'];
$password = $obj['password'];
//$password = '@dmin111';

//Login - POST /oauth2/token
$auth_url = $instance_url . "/oauth2/token";

$oauth2_token_arguments = array(
    "grant_type" => "password",
    //client id - default is sugar. 
    //It is recommended to create your own in Admin > OAuth Keys
    "client_id" => "sugar", 
    "client_secret" => "",
    "username" => $username,
    "password" => $password,
    //platform type - default is base.
    //It is recommend to change the platform to a custom name such as "custom_api" to avoid authentication conflicts.
    "platform" => "base" 
);
 
$auth_request = curl_init($auth_url);
curl_setopt($auth_request, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
curl_setopt($auth_request, CURLOPT_HEADER, false);
curl_setopt($auth_request, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($auth_request, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($auth_request, CURLOPT_FOLLOWLOCATION, 0);
curl_setopt($auth_request, CURLOPT_HTTPHEADER, array(
    "Content-Type: application/json"
));

//convert arguments to json
$json_arguments = json_encode($oauth2_token_arguments);
curl_setopt($auth_request, CURLOPT_POSTFIELDS, $json_arguments);

//execute request
$oauth2_token_response = curl_exec($auth_request);
print_r($oauth2_token_response);
