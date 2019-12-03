<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'header.php';?>
    <title>Document</title>
</head>
<body>
    




<h1>This is Movie API project</h1>

<?php
//include database and object files
include_once './config/database.php';
include_once './objects/movie.php';

// instantiate database and movie object
// vars found in config/database.php
$database = new Database();
$db = $database->getConnection();
// var found in objects/movie.php
$movie = new Movie($db);
// referencing the getMovies function in movie.php - this is how the table is being selected
$stmt = $movie->getMovies();


$num = $stmt->rowCount();

if($num>0):?>

    <?php while($row = $stmt->fetch(PDO::FETCH_ASSOC)):?>
<div>
        <h2><?php echo $row['movies_title'];?></h2>
        <h4>Year: <?php echo $row['movies_year'];?></h4>
        <a href="template_portfolio_item.php?id=<?php echo $row['movies_id'];?>">Detail</a>
</div>
    <?php endwhile;


    
    else:?>
  <h1>No movie yet</h1>
    <?php endif;?>

    <?php include 'footer.php';?>

</body>
</html>