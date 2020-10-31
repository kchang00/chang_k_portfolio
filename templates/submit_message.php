<div id="submit-msg">
    <div class="lightbox">
        <div class="lightbox-scroll-con">
            <div class="nav-positioning">
                <div class="main-nav-con">
                    <a class="logo logo-bg" href="/index.php"><img src="/public/images/logo_colour.svg" alt="logo"/></a>
                    <div class="hamburger-nav-con">
                        <a class="c-close c-close--htx close is-active hamburger-bg"><span>Close</span></a>
                    </div>
                </div>
            </div>
            <div class="thank-you-con">
                <?php if($is_success == True):?>
                    <img src="/public/images/submit_character.svg" alt="Submit Thank You">
                    <h2>You're awesome, <?php echo $name?>.</h2>
                    <h3>Thanks for reaching out. I'll get back to you soon!</h3>
                <?php else:?>
                    <h2>Oops! Sorry, <?php echo $name?>.</h2>
                    <h3>Your message did not go through. Please try again!</h3>
                <?php endif;?>
            </div>
        </div>
    </div>
</div>