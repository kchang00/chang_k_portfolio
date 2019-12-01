<?php


// var_dump($_POST['name']);
// var_dump($_GET);

//IF THE FORM IS NOT FILLED OUT
if(empty($_POST)){
    echo 'Please fill all the required fields!';
    exit;
}

//VALIDATE ALL DATA
//necessary to protect your server
$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'k_chang@fanshaweonline.ca';

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
    echo '<p>Thank you for contacting us, '.$name.'</p>';
}else{
    echo '<p>We are sorry but the mail did not go through</p>';
}



?>