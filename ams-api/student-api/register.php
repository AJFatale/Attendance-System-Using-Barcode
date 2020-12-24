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
elseif(!isset($data->sname)
    || !isset($data->enrollment_no)
    || !isset($data->email_id) 
    || !isset($data->semester)
    || !isset($data->course)
    || !isset($data->spassword)
    || empty(trim($data->sname))
    || empty(trim($data->enrollment_no))
    || empty(trim($data->email_id))
    || empty(trim($data->semester))
    || empty(trim($data->course))
    || empty(trim($data->spassword))
    ):

    $fields = ['fields' => ['sname',`enrollment_no`,'email_id',`semester`,`course`,'spassword']];
    $returnData = msg(0,422,'Please Fill in all Required Fields!',$fields);

// IF THERE ARE NO EMPTY FIELDS THEN-
else:
    
    $sname = trim($data->sname);
    $enrollment_no = trim($data->enrollment_no);
    $email_id = trim($data->email_id);
    $semester = trim($data->semester);
    $spassword = trim($data->spassword);
    $course = trim($data->course);

    if(!filter_var($email_id, FILTER_VALIDATE_EMAIL)):
        $returnData = msg(0,422,'Invalid Email Address!');
    
    elseif(strlen($spassword) < 8):
        $returnData = msg(0,422,'Your password must be at least 8 characters long!');

    elseif(strlen($sname) < 3):
        $returnData = msg(0,422,'Your name must be at least 3 characters long!');

    elseif(strlen($course) < 3):
        $returnData = msg(0,422,'Course name must be at least 3 characters long!');
    elseif(strlen($enrollment_no) != 11):
        $returnData = msg(0,422,'Enter valid Enrollment number!');
    
    else:
        try{

            $check_enrollment_no = "SELECT `enrollment_no` FROM `student` WHERE `enrollment_no`=:enrollment_no";
            $check_enrollment_no_stmt = $conn->prepare($check_enrollment_no);
            $check_enrollment_no_stmt->bindValue(':enrollment_no', $enrollment_no,PDO::PARAM_STR);
            $check_enrollment_no_stmt->execute();

            if($check_enrollment_no_stmt->rowCount()):
                $returnData = msg(0,422, 'This Enrollment number already in use!');
            
            else:
                $insert_query = "INSERT INTO `student`(`sname`,`enrollment_no`,`email_id`,`semester`,`course`,`spassword`) VALUES(:sname,:enrollment_no,:email_id,:semester,:course,:spassword)";

                $insert_stmt = $conn->prepare($insert_query);

                // DATA BINDING
                $insert_stmt->bindValue(':sname', htmlspecialchars(strip_tags($sname)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':enrollment_no', htmlspecialchars(strip_tags($enrollment_no)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':email_id', $email_id,PDO::PARAM_STR);
                $insert_stmt->bindValue(':semester', htmlspecialchars(strip_tags($semester)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':course', htmlspecialchars(strip_tags($course)),PDO::PARAM_STR);
                $insert_stmt->bindValue(':spassword', password_hash($spassword, PASSWORD_DEFAULT),PDO::PARAM_STR);
                
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