<?php

$server = "localhost";
$username = "root";
$password = "";
$database = "Tubes";

$connect = mysqli_connect($server, $username, $password, $database); //check mySQL connection
if (! $connect){ //if not connected
	die("Couldn't connect" . mysqli_connect_error); //show error message
}


?>