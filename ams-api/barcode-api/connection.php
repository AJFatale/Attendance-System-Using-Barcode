<?php 
    // Set connection variables
    $server = "sql109.epizy.com";
    $username = "epiz_29673553";
    $password = "MNnU7eYvnQmg12h";

    // Create a database connection
    $con = mysqli_connect($server, $username, $password);

    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    // echo "Success connecting to the db";
?>