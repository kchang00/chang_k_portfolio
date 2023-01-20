
<?php

//VALIDATE ALL DATA
//necessary to protect server
$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'hello@kaylachang.ca';

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

//SEND OUT EMAIL
// $headers = array(
//     'From'=>'hello@kaylachang.ca',
//     'Reply=To'=>$name.'<'.$email.'>'
// );

// FIX FOR BLUEHOST
// $emailfrom = 'hello@kaylachang.ca';

$headers = 
	'Return-Path: ' . $email . "\r\n" . 
	'From: ' . $name . ' <' . $email . '>' . "\r\n" . 
	'X-Priority: 3' . "\r\n" . 
	'X-Mailer: PHP ' . phpversion() .  "\r\n" . 
	'Reply-To: ' . $name . ' <' . $email . '>' . "\r\n" .
	'MIME-Version: 1.0' . "\r\n" . 
	'Content-Transfer-Encoding: 8bit' . "\r\n" . 
	'Content-Type: text/plain; charset=UTF-8' . "\r\n";

$params = '-f ' . $email;

if(mail($recipient, $subject, $message, $headers, $params)){
// END OF FIX FOR BLUEHOST
// if(mail($recipient, $subject, $message, $headers)){
    $is_success = True;
}else{
    $is_success = False;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <?php include 'templates/header.php';?>
    <title>Kayla Chang | Contact</title>
</head>
<body>
    <h1 class="hidden">Kayla Chang | Contact</h1>
    <?php include 'templates/main_nav.php';?>
    <div class="contact-con">
        <div class="main-con-nav-po">
            <h2>Let's Connect.</h2>
            <h3>Ready to start a project? I’ll do my best to get in touch within the week.</h3>
            <form id="contact-form" action="contact.php" method="post">
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
                <button type="submit" class="btn-large" name="submit">Submit</button>

            </form>
        </div>
        <?php if(isset($_POST['submit']))
            include 'templates/submit_message.php';
        ?>
    </div>

    <?php include 'templates/footer.php';?>
    <script src="/public/js/main.js"></script>
    <script src="/public/js/contact.js"></script>
</body>
</html>