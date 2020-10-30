<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

include 'database.php';

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	

	$fname = mysqli_real_escape_string($db, $request['fname']);
	$lname = mysqli_real_escape_string($db, $request['lname']);
	$email = mysqli_real_escape_string($db, $request['email']);
	$cnum = mysqli_real_escape_string($db, $request['cnum']);
	$dob = mysqli_real_escape_string($db, $request['dob']);
	$address = mysqli_real_escape_string($db, $request['address']);

	$sql = "INSERT INTO users(first_name,last_name,email,contact_number,date_of_birth,address) 
			VALUES ('$fname','$lname','$email','$cnum','$dob','$address')";
	if($db->query($sql))
	{
		http_response_code(201);
		$product = [
		'id' => mysqli_insert_id($db),
		'first_name' => $fname,
		'last_name' => $lname,
		'email' => $email,
		'contact_number' => $cnum,
		'date_of_birth' => $dob,
		'address' => $address
		];
		echo json_encode($product);
	}
	else
	{
		http_response_code(422);
	}
}