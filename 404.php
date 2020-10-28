<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'templates/header.php';?>
    <title>Oops! Page Not Found</title>
</head>
<body>
    <?php include 'templates/main_nav.php';?>

    <main class="error-wrapper">
        <h1 class="hidden">Error Page</h1>
            <div class="error-message-con">
                <div class="error-message-po-con">
                    <h2>Ah! You Found Me.</h2>
                    <h3>But I couldn't find the page you were looking for. Sorry about that!</h3>
                    <a href="index.php" class="btn-small">
                        <div>Head Back Home</div>
                        <div><img src="public/images/arrow_right_small.svg" alt="Right Arrow"></div>
                    </a>
                </div>
            </div>
            <div class="error-img-con">
                <img src="public/images/monster.gif">
            </div>
    </main>

    <?php include 'templates/footer.php';?>
</body>
</html>