<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));

//CREATE MESSAGE ARRAY AND SET EMPTY
$msg['message'] = '';

// CHECK IF RECEIVED DATA FROM THE REQUEST
if(isset($data->course) && isset($data->ldate) && isset($data->start_time) && isset($data->end_time)){
    // CHECK DATA VALUE IS EMPTY OR NOT
    if(!empty($data->course) && !empty($data->ldate) && !empty($data->start_time) && !empty($data->end_time)){
        
        $insert_query = "INSERT INTO `lectures`(course,ldate,start_time,end_time) VALUES(:course,:ldate,:start_time,:end_time)";
        
        $insert_stmt = $conn->prepare($insert_query);
        // DATA BINDING
        $insert_stmt->bindValue(':course', htmlspecialchars(strip_tags($data->course)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':ldate', htmlspecialchars(strip_tags($data->ldate)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':start_time', htmlspecialchars(strip_tags($data->start_time)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':end_time', htmlspecialchars(strip_tags($data->end_time)),PDO::PARAM_STR);

        if($insert_stmt->execute()){
            $msg['message'] = 'Data Inserted Successfully';
        }else{
            $msg['message'] = 'Data not Inserted';
        } 
        
    }else{
        $msg['message'] = 'Oops! empty field detected. Please fill all the fields';
    }
}
else{
    $msg['message'] = 'Please fill all the fields | title, body, author';
}
//ECHO DATA IN JSON FORMAT
echo  json_encode($msg);
?>