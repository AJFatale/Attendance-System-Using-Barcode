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
if(isset($_GET['course']) &&isset($_GET['date']) &&isset($_GET['start_time']) &&isset($_GET['end_time']))
{
    $course = $_GET['course'];
    $date = $_GET['date'];
    $start_time = $_GET['start_time'];
    $end_time = $_GET['end_time'];
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
// $sql = "SELECT courses.course,attendance.stat,attendance.in_time,attendance.enrollment_no FROM attendance INNER JOIN courses ON attendance.course_id=courses.course_id and course='$post_id'" ;
// $sql = "SELECT records.enrollment_no,records.in_time,lectures.ldate,lectures.start_time,lectures.end_time FROM `records`,lectures WHERE lectures.course='$course' and lectures.ldate='$date'";
$sql = "SELECT DISTINCT records.enrollment_no,student.sname,records.in_time 
        from student,records WHERE student.enrollment_no=records.enrollment_no 
        and CAST(in_time as time) >= '$start_time' 
        and CAST(in_time as time) < '$end_time' 
        and date='$date' AND student.course='$course'";
$stmt = $conn->prepare($sql);

$stmt->execute();

//CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE POSTS ARRAY
    $posts_array = [];
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
        $post_data = [
            // 'id' => $row['id'],
            'enrollment_no' =>$row['enrollment_no'],
            'sname' => $row['sname'],
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
        'enrollment_no' =>'',
        'sname' => '',
        'in_time' => ''
    ];
    //IF THER IS NO POST IN OUR DATABASE
    echo json_encode([$post_data]);
}
?>

