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

        $stmt->execute();

        return $stmt;
    }
}