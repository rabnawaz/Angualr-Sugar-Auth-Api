<?php


/* Authentication Start

$json = file_get_contents('php://input');
$obj = json_decode($json, true);

if(empty($obj['user_name']) || empty($obj['password'])){
	echo '';
	return;
}
*/

$user_name = $_POST['username'];

$login_password = $_POST['password'];

//print_r($_REQUEST['username']);
//print_r($login_password);
//die('user request');

$instance_url = 'https://westeros.rolustech.com:44332/rest/v10';
// $username = 'admin2';
// $password = '@dmin111';
$username = $user_name;
$password = $login_password;

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
curl_setopt($auth_request, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($auth_request, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($auth_request, CURLOPT_HTTPHEADER, array(
    "Content-Type: application/json",
    
));

//convert arguments to json
$json_arguments = json_encode($oauth2_token_arguments);
curl_setopt($auth_request, CURLOPT_POSTFIELDS, $json_arguments);

session_start();

// session_destroy();

//execute request
$oauth2_token_response = curl_exec($auth_request);

// SET SESSION
$_SESSION["oauth-token"] = $oauth2_token_response;





//print "<pre>";
//print_r ($oauth2_token_response);
echo $oauth2_token_response;
//$oauth2_token_response);
