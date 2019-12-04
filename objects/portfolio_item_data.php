<?php
class PItem{
    private $conn;

    // setting variables for table names (found in database)
    public $portfolio_card_table = 'tbl_p_card';
    public $portfolio_item_table = 'tbl_p_info';
    public $portfolio_card_item__linking_table = 'tbl_p_card_info';

    public function __construct($db){
        $this->conn = $db;
    }

    public function getHomeWorks(){
        $query = 'SELECT * FROM tbl_p_info;';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }

    public function getWorksByID($id){
        // test to see if site recieving id
        // echo $id;
        // exit;

        $query = 'SELECT ID FROM tbl_p_card;';

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        
        return $stmt;
    }

    public function getWorks(){
        // test to see if site recieving id
        // echo $id;
        // exit;

        $query = 'SELECT * FROM `tbl_p_card_info` WHERE `pcardID` =' . $id;

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        
        return $stmt;
    }
}