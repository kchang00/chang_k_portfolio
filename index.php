<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'header.php';?>
    <title>Kayla Chang | Portfolio</title>
</head>
<body>
    <!-- different nav from other pages -->
    <div class="nav-positioning">
        <div class="main-nav-con">
            <a class="logo" href="index.php"><img src="public/images/logo.svg" alt="logo"/></a>
            <div class="hamburger-nav-con">
                <a class="c-hamburger c-hamburger--htx hamburger"><span>Menu</span></a>
                <nav class="main-nav">
                    <h2 class="hidden">Main Navigation</h2>
                    <ul>
                        <a href="#portfolio-lightbox-con"><li>Portfolio</li></a>
                        <a href="#"><li>About</li></a>
                        <a href="contact.php"><li>Contact</li></a>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
    <div class="main-con">
        <section class="hero">
            <div class="hero-title">
                <h1>Kayla Chang</h1>
                <h2>Interactive Media Designer</h2>
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
            <div>
        </section>

        <section id="portfolio-lightbox-con">
            <section class="team">
                <h2 class="hidden">Portfolio Work</h2>
                <!-- loop through all our team members and put their info on the page -->
                <!-- work = a var in an sql query in index.js) -->
                <!-- forEach result in the sql query (meaning for each row of data),
                populate the team section according to these elements in the html -->
                <!-- This is like a JS forEach loop - hbs has built in helpers -->
                <!-- {{#each work}}
                    <div class="user-panel">
                        <img src="images/{{Img}}" alt="Portfolio Image">
                        <a class="u-link" href="{{ID}}">
                            <h3>{{Title}}</h3>
                            <h4>{{Info}}</h4>
                        </a>
                    </div>
                {{/each}} -->
                <div class="user-panel">
                    <img src="public/images/botw.jpg" alt="Portfolio Image">
                    <a class="u-link" href="">
                        <h3>Test Porfolio Title</h3>
                        <h4>Test Subtitle</h4>
                    </a>
                </div>
            </section>

            <!-- this will be filled in on the client side when we render our AJAX data -->
            <section class="lightbox">
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
                        <!-- render the database content here -->
                        <!-- used in main.js parseUserData function -->
                        <div class="pwork-con">
                            <div class="pwork-desc">
                                <h2>Work Title</h2>
                                
                                <h3>What is It?</h3>
                                <p>Work Description I’m an Interactive Media Designer — a versatile artist who makes websites, games, graphics, and animation. I believe in creating intuitive design that exudes personality, while staying authentic to brand vision. I’m based in London, Ontario! </p>
                                <a href="#" class="btn-small">
                                    <div>See project</div>
                                    <div><img src="public/images/arrow_right_small.svg" alt="Right Arrow"></div>
                                </a>
                            </div>
                            <div class="pwork-sidebar">
                                <div>
                                    <h5>Deliverables</h5>
                                    <ul>
                                        <li>Deliverable1</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5>Partners</h5>
                                    <ul>
                                        <li>Name1</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h5>Year</h5>
                                    <!-- loop through tools here -->
                                    <ul>
                                        <li>2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="pwork-img"></div>
                        <div class="pwork-img"></div>
                        <div class="pwork-img"></div>

                        <!-- can include video here -->

                        <section class="pwork-contact">
                            <h2>Want to make something like this?</h2>
                            <a href="#" class="btn-large">Yeah!</a>
                        </section>
                    </div> <!-- end of main database content -->
                    <section class="pwork-more">
                        <a href="#">
                            <img src="public/images/arrow_left_long.svg" alt="Previous">
                            <p>Previous Project</p>
                        </a>
                        <a href="#">
                            <img src="public/images/arrow_left_long.svg" alt="Next">
                            <p>Next Project</p>
                        </a>
                    </section>
                </div>
            </section>
        </section>

        <section class="thanks-footer">
            <h2>Thanks for visiting!</h2>
            <img src="public/images/monster.gif" alt="Thanks">
        </section>
    </div>

    <?php include 'footer.php';?>
    <script src="public/js/main.js"></script>
    <script src="public/js/main_nav_home.js" type="text/javascript"></script>
    <script src="public/js/time_home.js" type="text/javascript"></script>	
</body>
</html>