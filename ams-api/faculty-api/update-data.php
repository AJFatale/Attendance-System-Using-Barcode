<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: PUT");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require __DIR__.'/classes/Database.php';
require __DIR__.'/middlewares/Auth.php';

$allHeaders = getallheaders();
$db_connection = new Database();
$conn = $db_connection->dbConnection();
$auth = new Auth($conn,$allHeaders);
$valid = false;


// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));

$msg['message'] = [ 
    "success" => 0,
    "status" => 401,
    "message" => "Unauthorized"
];

//CHECKING, IF ID AVAILABLE ON $data
if($auth->isAuth()){
    $valid = true;   
}
if($valid){

if(isset($data->email_id)){
    
    
    $email_id = $data->email_id;
    
    //GET POST BY ID FROM DATABASE
    $get_faculty = "SELECT * FROM `faculty` WHERE email_id=:email_id";
    $get_stmt = $conn->prepare($get_faculty);
    $get_stmt->bindValue(':email_id', $email_id,PDO::PARAM_INT);
    $get_stmt->execute();
    
    
    //CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
    if($get_stmt->rowCount() > 0){
        
        // FETCH POST FROM DATBASE 
        $row = $get_stmt->fetch(PDO::FETCH_ASSOC);
        
        // CHECK, IF NEW UPDATE REQUEST DATA IS AVAILABLE THEN SET IT OTHERWISE SET OLD DATA
        $fname = isset($data->fname) ? $data->fname : $row['fname'];
        $course = isset($data->course) ? $data->course : $row['course'];
        $fpassword = isset($data->fpassword) ? $data->fpassword : $row['fpassword'];
        
        $update_query = "UPDATE `faculty` SET fname = :fname, course = :course, fpassword = :fpassword 
        WHERE email_id = :email_id";
        
        $update_stmt = $conn->prepare($update_query);
        
        // DATA BINDING AND REMOVE SPECIAL CHARS AND REMOVE TAGS
        $update_stmt->bindValue(':fname', htmlspecialchars(strip_tags($fname)),PDO::PARAM_STR);
        $update_stmt->bindValue(':course', htmlspecialchars(strip_tags($course)),PDO::PARAM_STR);
        $update_stmt->bindValue(':fpassword', password_hash($fpassword, PASSWORD_DEFAULT),PDO::PARAM_STR);
        $update_stmt->bindValue(':email_id', $email_id,PDO::PARAM_INT);
        
        
        if($update_stmt->execute()){
            $msg['message'] = 'Data updated successfully';
        }else{
            $msg['message'] = 'data not updated';
        }   
        
    }
    else{
        $msg['message'] = 'Invlid ID';
    } 
} 
    
    
    
}
echo  json_encode($msg);
?>