<?php
class Database{
    
    private $db_host = 'sql109.epizy.com';
    private $db_name = 'epiz_29673553_ams';
    private $db_username = 'epiz_29673553';
    private $db_password = 'MNnU7eYvnQmg12h';
    
    
    public function dbConnection(){
        
        try{
            $conn = new PDO('mysql:host='.$this->db_host.';dbname='.$this->db_name,$this->db_username,$this->db_password);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conn;
        }
        catch(PDOException $e){
            echo "Connection error ".$e->getMessage(); 
            exit;
        }
        
        
    }
}
?>