<?php
class PItem{
    private $conn;

    // setting variables for table names (found in database)
    public $portfolio_item_table = 'tbl_p_info';

    public function __construct($db){
        $this->conn = $db;
    }

    public function getWorks(){
        $query = 'SELECT * FROM tbl_p_info;';

        $stmt = $this->conn->prepare($query);
        // research for preventing sql injection in the future
        // $this->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        // $this->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        //$query = $db->prepare('INSERT INTO table (column) VALUES (:column)');
        //$query->execute(array('column' => $unsafeValue));

        $stmt->execute();

        return $stmt;
    }
}