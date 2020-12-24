<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// CHECK GET ID PARAMETER OR NOT
if(isset($_GET['enrollment_no']) && isset($_GET['course']))
{
    $enrollment_no = $_GET['enrollment_no'];
    $course = $_GET['course'];
    //IF HAS ID PARAMETER
    // $post_id = filter_var($_GET['id'], FILTER_VALIDATE_INT,[
    //     'options' => [
    //         'default' => 'all_posts',
    //         'min_range' => 1
    //     ]
    // ]);
}
else{
    $post_id = 'all_posts';
}

// MAKE SQL QUERY
// IF GET POSTS ID, THEN SHOW POSTS BY ID OTHERWISE SHOW ALL POSTS
// $sql = "SELECT courses.course,attendance.stat,attendance.in_time,attendance.enrollment_no FROM attendance INNER JOIN courses ON attendance.course_id=courses.course_id and enrollment_no='$post_id'" ;

$sql = "select DISTINCT student.course,records.date,records.in_time from records ,student WHERE records.enrollment_no='$enrollment_no' AND student.course='$course'";
$stmt = $conn->prepare($sql);

$stmt->execute();

//CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE POSTS ARRAY
    $posts_array = [];
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
        $post_data = [
            // 'id' => $row['id'],
            'course' =>$row['course'],
            'date' => $row['date'],
            // 'course' => $row['course'],            
            'in_time' => $row['in_time']
        ];
        // PUSH POST DATA IN OUR $posts_array ARRAY
        array_push($posts_array, $post_data);
    }
    //SHOW POST/POSTS IN JSON FORMAT
    echo json_encode($posts_array);
 

}
else{
    $post_data = [
        // 'id' => $row['id'],
        'course' =>'',
        'date' => '',
        // 'course' => $row['course'],            
        'in_time' => ''
    ];
    //IF THER IS NO POST IN OUR DATABASE
    echo json_encode([$post_data]);
}
?>

