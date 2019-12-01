<?php
class Movie{
    private $conn;

    // setting variables for table names (found in database)
    public $movie_table = 'tbl_movies';
    public $genre_table = 'tbl_genre';
    public $movie_genre_linking_table = 'tbl_mov_genre';

    public function __construct($db){
        $this->conn = $db;
    }

    // id being grabbed by read.php $_GET['id']
    public function getMovieByID($id){
        // test to see if site recieving id
        // echo $id;
        // exit;

        $query = 'SELECT * FROM `tbl_movies` WHERE `movies_id` =' . $id;

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        
        return $stmt;
    }

    public function getMovieByGenre($id){
        // test to see if site recieving id
        // echo $id;
        // exit;

        // $query = 'SELECT * FROM `tbl_genre` WHERE `genre_name` = "'. $id . '"';

        $query = 'SELECT
                m.*, GROUP_CONCAT(g.genre_name) as genre_name
            FROM
                `tbl_movies` m
            LEFT JOIN tbl_mov_genre link ON
                link.movies_id = m.movies_id
            LEFT JOIN tbl_genre g ON
                g.genre_id = link.genre_id
            WHERE g.genre_name LIKE "%'. $id . '%"' .
            'GROUP BY
                m.movies_id';

        // echo $query;
        // exit;

        $stmt = $this->conn->prepare($query);

        $stmt->execute();
        
        return $stmt;
    }

    public function getMovies(){
        //Writing SQL query below to fetch all movies from tbl_movies table;
        // use the var we already defined for tbl_movies
        // $query = 'SELECT * FROM ' .$this->movie_table;

        // fetch all movies + genres associated with those movies
        // STEP 1: MAKE SURE THE SQL QUERY WORKS WITH PHPMYADMIN
        // $query = 'SELECT
        //                 m.*, GROUP_CONCAT(g.genre_name) as genre_name
        //             FROM
        //                 `tbl_movies` m
        //             LEFT JOIN tbl_mov_genre link ON
        //                 link.movies_id = m.movies_id
        //             LEFT JOIN tbl_genre g ON
        //                 g.genre_id = link.genre_id
        //             GROUP BY
        //                 m.movies_id';

        // STEP 2: REPLACE THE QUERY NAMES WITH THE PHP VARIABLES 
        $query = 'SELECT
                        m.*, GROUP_CONCAT(g.genre_name) as genre_name
                    FROM
                        '.$this->movie_table.' m
                    LEFT JOIN '.$this->movie_genre_linking_table.' link ON
                        link.movies_id = m.movies_id
                    LEFT JOIN '.$this->genre_table.' g ON
                        g.genre_id = link.genre_id
                    GROUP BY
                        m.movies_id';


        $stmt = $this->conn->prepare($query);

        $stmt->execute();

        return $stmt;
    }
}