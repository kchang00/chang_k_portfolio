<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'header.php';?>
    <title>Oops! Page Not Found</title>
</head>
<body>
    <?php include 'main_nav.php';?>

    <main class="error-wrapper">
        <h1 class="hidden">Error Page</h1>
            <div class="error-message-con">
                <h2>Ah! You Found Me.</h2>
                <p>But I couldn't find the page you were looking for. Sorry about that!</p>

                <a class="btn" href="/">Head Back Home</a>
            </div>
            <div class="error-img-con">
                <img src="public/images/monster.gif">
            </div>
    </main>

    <?php include 'footer.php';?>

    <script src="public/js/main_nav.js"></script>
</body>
</html>