<?php
defined('BASEPATH') OR exit('No direct script access allowed');


$route['default_controller'] = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes'] = FALSE;


 // API AUTH ROUTES
$route['api/register'] = 'Auth/register';
$route['api/login'] = 'Auth/login';
 
$route['api/forgotPassword'] = 'Auth/forgotPassword';
$route['api/resetPassword'] = 'Auth/resetPassword';
