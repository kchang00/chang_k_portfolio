<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'header.php';?>
    <title>Kayla Chang | Portfolio</title>
</head>
<body>
    <h1 class="hidden">Kayla Chang | Portfolio</h1>
    <!-- different nav from other pages -->
    <div class="nav-positioning">
        <div class="main-nav-con">
            <a class="logo" href="index.php"><img src="public/images/logo.svg" alt="logo"/></a>
            <div class="hamburger-nav-con">
                <a class="c-hamburger c-hamburger--htx hamburger"><span>Menu</span></a>
                <nav class="main-nav">
                    <h2 class="hidden">Main Navigation</h2>
                    <ul>
                        <li><a href="#portfolio-lightbox-con">Portfolio</a></li>
                        <li><a href="about.php">About</a></li>
                        <li><a href="contact.php">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="main-con">
        <section class="hero">
            <div class="hero-title">
                <h2>Kayla Chang</h2>
                <h3>Interactive Media Designer</h3>
                <p>Creating digital experiences that engage and empower users.</p>
            </div>
            <div class="scroll-down">
                <p>Scroll down</p>
                <img src="public/images/scroll_down_dots.svg" alt="Scroll Down">
            </div>
        </section>

        <section class="welcome-desc">
            <div class="desc-wrap">
                <h2 class="js-greeting">Why, hello there!</h2>
                <h3>Welcome to my portfolio.</h3>
                <div class="desc-columns">
                    <p>
                        I’m an Interactive Media Designer — a versatile artist who creates visual narratives that deliver the maximum impact. I work to make something beautiful, make something easier, or make something possible. I believe in creating intuitive design that exudes personality, while staying authentic to the client vision.
                    </p>
                    <p>
                        Most of my work involves making websites, games, graphics, and animations. I think a lot about how to enhance the user experience with functional, accessible, and striking design. Feel free to take a look around, or <a href="contact.php">say hi</a>.
                    </p>
                </div>
            </div>
        </section>

        <div id="portfolio-lightbox-con">
            <section class="portfolio-works">
                <h2 class="hidden">Portfolio Work</h2>
                <?php
                //include database and object files
                include_once './config/database.php';
                include_once './objects/portfolio_item_data.php';

                // instantiate database and portfolio_item_data object
                // vars found in config/database.php
                $database = new Database();
                $db = $database->getConnection();
                // var found in objects/portfolio_item_data.php
                $pitem = new PItem($db);
                // referencing the getWorks function in portfolio_item_data.php - this is how the table is being selected
                $stmt = $pitem->getWorks();

                $num = $stmt->rowCount();

                if($num>0):?>

                <?php
                // used to define project-index class and data-index data attribute
                // set to 1 to match row ID, IDs start at 1
                $row_index = 1;
                while($row = $stmt->fetch(PDO::FETCH_ASSOC)):
                    // var_dump($row);
                        // $separate_deliverables = explode(",", $row["Deliverables"]);
                        $separate_images = array_map('trim', explode(",", $row["Imgs"]));
                        // $separate_team = explode(",", $row["Team"]);


                        // var_dump($separate_deliverables);
                        // echo $separate_deliverables[0];
                        // exit;
                    ?>
                    <div class="portfolio-card project-index-<?php echo $row_index;?>" style="background-image:url(./public/images/<?php echo $separate_images[0];?>);" data-project="<?php echo htmlspecialchars(json_encode($row));?>" data-index="<?php echo $row_index;?>">
                        <div class="p-link">
                            <h3><?php echo $row['Title'];?></h3>
                            <h4><?php echo $row['Medium'];?></h4>
                        </div>
                    </div>
                <?php
            // sets project-index class number data-index attribute number (first project card = 0, second = 1 etc.) 
            $row_index++;    
            endwhile;

            else:?>
            <h3>Coming Soon</h3>
            <?php endif; ?>
            </section>

            <article class="lightbox">
                <div class="lightbox-scroll-con">
                    <div class="nav-positioning">
                        <div class="main-nav-con">
                            <a class="logo logo-bg" href="/"><img src="public/images/logo_colour.svg" alt="logo"/></a>
                            <div class="hamburger-nav-con">
                                <a class="c-close c-close--htx close is-active hamburger-bg"><span>Close</span></a>
                            </div>
                        </div>
                    </div>
                    <div class="lb-desc">
                        <div class="lb-desc-con">
                        <!-- render the database content here -->
                            <div class="pwork-con">
                                <div class="pwork-desc">
                                    <!-- Hook it up to database -->
                                    <!-- calling elements in JS and populating them from JSON object -->
                                    <h2 class="project-title"></h2>
                                    <h3 class="project-subtitle"></h3>
                                    <p class="project-desc"></p>
                                    <a href="" target="_blank" class="project-url btn-small">
                                        <div>See project</div>
                                        <div><img src="public/images/arrow_right_small.svg" alt="Right Arrow"></div>
                                    </a>
                                </div>
                                <div class="pwork-sidebar">
                                    <div class="pwork-sidebar-con">
                                        <div>
                                            <h5>Deliverables</h5>
                                            <ul class="project-deliverables"></ul>
                                        </div>

                                        <div>
                                            <h5>Team</h5>
                                            <ul class="project-team"></ul>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <h5>Year</h5>
                                        <!-- loop through tools here -->
                                        <ul>
                                            <!-- calling elements in JS and populating them from JSON object -->
                                            <li class="project-year"></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <section class="pwork-visuals">
                                <h2 class="hidden">Project Visuals</h2>
                                <div class="video-con project-videos"></div>

                                <div class="project-images"></div>
                            </section>

                            <section class="pwork-contact">
                                <h2>Want to make something like this?</h2>
                                <a href="contact.php" class="btn-large">Yeah!</a>
                            </section>
                        </div> <!-- end of lb-desc-con - white background-->
                        <section class="pwork-more">
                            <h2 class=hidden>More Works</h2>
                            <button class="project-nav-button project-previous-url" data-nav="previous">
                                <img src="public/images/arrow_left_long.svg" alt="Previous">
                                <span class="project-previous-title">Previous Project</span>
                            </button>
                            <button class="project-nav-button project-next-url" data-nav="next">
                                <img src="public/images/arrow_left_long.svg" alt="Next">
                                <span class="project-next-title">Next Project</span>
                            </button>
                        </section>
                    </div> <!-- end of lightbox database content -->
                </div>
            </article>
        </div>

        <section class="thanks-footer">
            <h2>Thanks for visiting!</h2>
            <img src="public/images/footer_plant.svg" alt="Thanks">
        </section>
    </div>

    <?php include 'footer.php';?>
    <script src="public/js/main.js"></script>
    <script src="public/js/main_nav_home.js"></script>
    <script src="public/js/time_home.js"></script>	
</body>
</html>