<?php include "connection.php";
global $insert;
if(isset($_POST['text'])){
      
    // Collect post variables
    $name = $_POST['text'];
    
    //  $sq = "INSERT INTO `ams`.`records` (`age`, `gender`, `email`, `phone`, `other`, `dt`) VALUES ('$name', '$age', '$gender', '$email', '$phone', '$desc', current_timestamp());";
    // echo $sql;
    // $sq = "UPDATE `ams`.`attendance` SET `stat`='Present',`in_time`=current_timestamp() WHERE `enrollment_no`='$name';";
    $sq = "INSERT INTO `ams`.`records`(`enrollment_no`, `date`, `in_time`) VALUES ('$name',current_timestamp(),current_timestamp())";
    // Execute the query
    if($con->query($sq) == true){
         echo "Successfully inserted";

        // Flag for successful insertion
        $insert = true;
    }
    else{
        echo "ERROR: $sq <br> $con->error";
    }

    // Close the database connection
    $con->close();

    
}
?>