<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));


//CHECKING, IF ID AVAILABLE ON $data
if(isset($data->email_id)){
    $msg['message'] = '';
    
    $email_id = $data->email_id;
    
    //GET POST BY ID FROM DATABASE
    // YOU CAN REMOVE THIS QUERY AND PERFORM ONLY DELETE QUERY
    $check_faculty = "SELECT * FROM `faculty` WHERE email_id=:email_id";
    $check_faculty_stmt = $conn->prepare($check_faculty);
    $check_faculty_stmt->bindValue(':email_id', $email_id,PDO::PARAM_INT);
    $check_faculty_stmt->execute();
    
    //CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
    if($check_faculty_stmt->rowCount() > 0){
        
        //DELETE POST BY ID FROM DATABASE
        $delete_faculty = "DELETE FROM `faculty` WHERE email_id=:email_id";
        $delete_faculty_stmt = $conn->prepare($delete_faculty);
        $delete_faculty_stmt->bindValue(':email_id', $email_id,PDO::PARAM_INT);
        
        if($delete_faculty_stmt->execute()){
            $msg['message'] = 'Faculty Deleted Successfully';
        }else{
            $msg['message'] = 'Faculty Not Deleted';
        }
        
    }else{
        $msg['message'] = 'Invlid ID';
    }
    // ECHO MESSAGE IN JSON FORMAT
    echo  json_encode($msg);
    
}
?>