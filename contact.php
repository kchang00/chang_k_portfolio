
<?php

// var_dump($_POST['name']);
// var_dump($_GET);

//IF THE FORM IS NOT FILLED OUT
// if(empty($_POST)){
//     // echo 'Please fill all the required fields!';
//     exit;
// }

//VALIDATE ALL DATA
//necessary to protect your server
$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'hello@kaylachang.ca';

// to make a field required, kill the function if the value is "empty"
//Use GET to pass along message ?=true or ?=false to redirect users after form is sent + make thank you message pop up in JS

if (isset($_POST['name'])) {
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['email'])) {
    // if there's a line break in an email (it's very long), strip it out
   $email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
   $email = filter_var($email,FILTER_VALIDATE_EMAIL);
}

if (isset($_POST['subject'])) {
    $subject = filter_var($_POST['subject'], FILTER_SANITIZE_STRING);
}

if (isset($_POST['message'])) {
    $message = $_POST['message']; 
}

//Internet courrier validates email to protect from spam
//Ex. The courrier thinks a user is suspicious because their server and domain don't match?
//This makes sure internet sees that the email is coming from your server, and your domain, and that they match (they are not suspicious)

//SEND OUT EMAIL
// $headers = array(
//     'From'=>'noreply@domainname.ca',
//     'Reply=To'=>$name.'<'.$email.'>'
// );

// if(mail($recipient, $subject, $message, $headers)){
if(mail($recipient, $subject, $message)){
    $submit_msg = 
    '<div class="lightbox">
        <div class="lightbox-scroll-con">
            <div class="nav-positioning">
                <div class="main-nav-con">
                    <a class="logo logo-bg" href="/"><img src="public/images/logo_colour.svg" alt="logo"/></a>
                    <div class="hamburger-nav-con">
                        <a class="c-close c-close--htx close is-active hamburger-bg"><span>Close</span></a>
                    </div>
                </div>
            </div>
            <div class="thank-you-con">
                <img src="public/images/submit_character.svg" alt="Submit Thank You">
                <h2>You are awesome, ' .$name.'.</h2>
                <h3>Thanks for reaching out. I will get back to you soon!</h3>
            </div>
        </div>
    </div>';
}else{
    $submit_msg =
    '<div class="lightbox">
    <div class="lightbox-scroll-con">
        <div class="nav-positioning">
            <div class="main-nav-con">
                <a class="logo logo-bg" href="/"><img src="public/images/logo_colour.svg" alt="logo"/></a>
                <div class="hamburger-nav-con">
                    <a class="c-close c-close--htx close is-active hamburger-bg"><span>Close</span></a>
                </div>
            </div>
        </div>
        <div class="thank-you-con">
            <h2>Oops!</h2>
            <h3>We are sorry,' .$name.'. Your message did not go through.</h3>
        </div>
    </div>
</div>';
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'header.php';?>
    <title>Kayla Chang | Contact</title>
</head>
<body>
    <?php include 'main_nav.php';?>
    <div class="contact-con">
        <div class="main-con-nav-po">
            <h2>Let's Connect.</h2>
            <h3>Ready to start a project? I’ll do my best to get in touch within the week.</h3>
            <!-- <form action="contact/data_contact.php" method="post"> -->
            <form id="contact-form" action="contact.php" method="post">
                <!-- method="get" makes data in contact form visible in url. use method="post" for sensitive data like password -->
                <!-- action is the reciever -->
                <!-- for attribute must be same as id of input to link them together -->
                <!-- name attribute can be anything we want to name it. it's for back-end -->
                <div class="form-con">
                    <div>
                        <label for="u-name">Name</label>
                        <input id="u-name" type="text" name="name" placeholder="What's your name?" required>

                        <label for="u-email">Email</label>
                        <input id="u-email" type="email" name="email" placeholder="What's your email?" required>

                        <label for="e-subject">Subject</label>
                        <input id="e-subject" type="text" name="subject" placeholder="What's this about?" required list="e-subject-options">
                        <datalist id="e-subject-options">
                            <option value="Business Inquiry"></option>
                            <option value="Hello!"></option>
                            <option value="Report a Bug"></option>
                        </datalist>
                    </div>
                    
                    <div>
                        <label for="e-message">Message</label>
                        <textarea id="e-message" name="message" placeholder="How can I help?" required></textarea>
                    </div>
                </div>

                <button type="submit" class="btn-large">Submit</button>

            </form>
        </div>
        <div id="submit-msg"><?php if(isset($submit_msg)){ echo $submit_msg;}?></div>
    </div>

    <?php include 'footer.php';?>

    <script src="public/js/main_nav.js"></script>
    <script src="public/js/main.js"></script>
    <script src="public/js/contact.js"></script>
</body>
</html>