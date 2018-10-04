<?php


/* Authentication Start

$instance_url = 'https://staging.rtlabs.co.uk:44367/rest/v11_1';
$username = 'admin2';
$password = '@dmin111';

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


// 
//execute request
$oauth2_token_response = curl_exec($auth_request);
//print_r($oauth2_token_response);
 
 
 */
 
 
 // 2nd call here
 //die;
//decode oauth2 response to get token
$oauth2_token_response_obj = json_decode($oauth2_token_response);
$oauth_token = $oauth2_token_response_obj->access_token;

/* Authentication End*/


$filter_url = $instance_url . "/Accounts/filter";

$filter_arguments = array(
    );
/*$filter_arguments = array(
    "filter" => array(
        array(
            '$or' => array(
                array(
                    //name starts with 'a'
                    "name" => ar[ray(
                        '$starts'=>"A",
                    )
                ),
                array(
                    //name starts with 'b'
                    "name" => array(
                        '$starts'=>"b",
                    )
                )
            ),
        ),
    ),
    "max_num" => 2,
    "offset" => 0,
    "fields" => "id",
    "order_by" => "date_entered",
    "favorites" => false,
    "my_items" => false,
);*/

$filter_request = curl_init($filter_url);
curl_setopt($filter_request, CURLOPT_HTTP_VERSION, CURL_HTTP_VERSION_1_0);
curl_setopt($filter_request, CURLOPT_HEADER, false);
curl_setopt($filter_request, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($filter_request, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($filter_request, CURLOPT_FOLLOWLOCATION, 0);
curl_setopt($filter_request, CURLOPT_HTTPHEADER, array(
    "Content-Type: application/json",
    "oauth-token: {$oauth_token}"
));

//convert arguments to json
$json_arguments = json_encode($filter_arguments);
curl_setopt($filter_request, CURLOPT_POSTFIELDS, $json_arguments);

//execute request
$filter_response = curl_exec($filter_request);

//decode json
// $filter_response_obj = json_decode($filter_response);

print_r ($filter_response);