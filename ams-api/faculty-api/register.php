<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

function msg($success,$status,$message,$extra = []){
    return array_merge([
        'success' => $success,
        'status' => $status,
        'message' => $message
    ],$extra);
}

// INCLUDING DATABASE AND MAKING OBJECT
require __DIR__.'/classes/Database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));
$returnData = [];

// IF REQUEST METHOD IS NOT POST
if($_SERVER["REQUEST_METHOD"] != "POST"):
    $returnData = msg(0,404,'Page Not Found!');

// CHECKING EMPTY FIELDS
elseif(!isset($data->fname) 
    || !isset($data->email_id) 
    || !isset($data->fpassword)
    || !isset($data->course)
    || empty(trim($data->fname))
    || empty(trim($data->email_id))
    || empty(trim($data->fpassword))
    || empty(trim($data->course))
    ):

    $fields = ['fields' => ['fname','email_id','fpassword','course']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// IF THERE ARE NO EMPTY FIELDS THEN-
else:
    
    $fname = trim($data->fname);
    $email_id = trim($data->email_id);
    $fpassword = trim($data->fpassword);
    $course = trim($data->course);

    if(!filter_var($email_id, FILTER_VALIDATE_EMAIL)):
        $returnData = msg(0,422,'Invalid Email Address!');
    
    elseif(strlen($fpassword) < 8):
        $returnData = msg(0,422,'Your password must be at least 8 characters long!');

    elseif(strlen($fname) < 3):
        $returnData = msg(0,422,'Your name must be at least 3 characters long!');

    elseif(strlen($course) < 3):
        $returnData = msg(0,422,'Course name must be at least 3 characters long!');

    else:
        try{

            $check_email_id = "SELECT `email_id` FROM `faculty` WHERE `email_id`=:email_id";
            $check_email_id_stmt = $conn->prepare($check_email_id);
            $check_email_id_stmt->bindValue(':email_id', $email_id,PDO::PARAM_STR);
            $check_email_id_stmt->execute();

            if($check_email_id_stmt->rowCount()):
                $returnData = msg(0,422, 'This E-mail already in use!');
            
            else:
                $insert_query = "INSERT INTO `faculty`(`fname`,`email_id`,`fpassword`,`course`) VALUES(:fname,:email_id,:fpassword,:course)";

                $insert_stmt = $conn->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue(':fname', htmlspecialchars(strip_tags($fname)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':email_id', $email_id,PDO::PARAM_STR);
                $insert_stmt->bindValue(':fpassword', password_hash($fpassword, PASSWORD_DEFAULT),PDO::PARAM_STR);
                $insert_stmt->bindValue(':course', htmlspecialchars(strip_tags($course)),PDO::PARAM_STR);

                $insert_stmt->execute();

                $returnData = msg(1,201,'You have successfully registered.');

            endif;

        }
        catch(PDOException $e){
            $returnData = msg(0,500,$e->getMessage());
        }
    endif;
    
endif;

echo json_encode($returnData);