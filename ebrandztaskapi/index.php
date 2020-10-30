<?php

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

include 'database.php';
$users = [];

$sql = "SELECT * FROM users";
if($result = $db->query($sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$users[$i]['id'] = $row['id'];
		$users[$i]['fname'] = $row['first_name'];
		$users[$i]['lname'] = $row['last_name'];
		$users[$i]['cnum'] = $row['contact_number'];
		$users[$i]['email'] = $row['email'];
		$users[$i]['dob'] = $row['date_of_birth'];
		$users[$i]['address'] = $row['address'];
		$i++;
	}
	echo json_encode($users);
}
else
{
	http_response_code(404);
}