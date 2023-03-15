
<?php

//VALIDATE ALL DATA
//necessary to protect server
$name = '';
$email = '';
$subject = '';
$message = '';
$recipient = 'hello@kaylachang.ca';

//FOR RECAPTCHA
$recaptcha_url = 'https://www.google.com/recaptcha/api/siteverify';
$recaptcha_secret = '6Le7EeUkAAAAAB79CVr_RaviAQgNBfSppopZ_wRi';
$recaptcha_response = $_POST['g-recaptcha-response'];

$recaptcha = file_get_contents($recaptcha_url . '?secret=' . $recaptcha_secret . '&response=' . $recaptcha_response);
$recaptcha = json_decode($recaptcha, true);

if (isset($_POST['name'])){
    $name = trim($_POST['name']);
    $name = filter_var($name,FILTER_SANITIZE_STRING);
}

if (isset($_POST['email'])){
    // if there's a line break in an email (it's very long), or spaces, strip it out
    $email = str_replace(array("\r", "\n", "%0a", "%0d"),'',$_POST['email']);
    $email = filter_var($email,FILTER_VALIDATE_EMAIL);
}

if (isset($_POST['subject'])){
    $subject = trim($_POST['subject']);
    $subject = filter_var($subject, FILTER_SANITIZE_STRING);
}

if (isset($_POST['message'])){
    $message = trim($_POST['message']);
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

$email_body =  $message;

if(!empty($name) && !empty($email) && !empty($subject) && !empty($message) && $recaptcha['success'] == 1){
    if(mail($recipient, $subject, $email_body, $headers, $params)){
        $is_success = True;
    }else{
        $is_success = False;
    }
}else{
    $is_success = False;
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <script>
        function onSubmit(token) {
            document.getElementById("contact-form").submit();
        }

        function validate(event) {
            event.preventDefault();

            var inputFields = document.getElementsByTagName("input"),
                textareaFields = document.getElementsByTagName("textarea"),
                allFields = [...inputFields, ...textareaFields];
            
            // code from https://www.sitepoint.com/instant-validation/
            //identify whether a field should be validated
            //ie. true if the field is neither readonly nor disabled,
            //and has either "pattern", "required" or "aria-invalid"
            function shouldBeValidated(field) {
                return (
                !(field.getAttribute("readonly") || field.readonly) &&
                !(field.getAttribute("disabled") || field.disabled) &&
                (field.getAttribute("pattern") || field.getAttribute("required"))
                );
            }

            function addErrorMsg(field){
                let fieldSib = field.nextSibling,
                    inputErrorCon = field.parentNode,
                    errorMsg = field.dataset.errorMsg,
                    errorMsgText = document.createTextNode(errorMsg); // create text for p tag

                var errorExists = inputErrorCon.querySelector('.input-error');

                if (errorExists){
                    return;
                }else{
                    var errorMsgElement = document.createElement('p'); //create error message p tag
                        errorMsgElement.appendChild(errorMsgText); // add the text node to the newly created p tag
                        errorMsgElement.classList.add('input-error');// add styling class

                    if (fieldSib){
                        // if the input field has another element following it, insert before that following element
                        inputErrorCon.insertBefore(errorMsgElement, fieldSib);
                    } else{
                        // otherwise, append to the end of the div
                        inputErrorCon.appendChild(errorMsgElement);
                    }
                }
            }

            // function scrollToField(field){
            //     var fieldRect = field.getBoundingClientRect();
            //     var mainNavCon 	 = document.querySelector('.main-nav-con');
            //     var navRect = mainNavCon.getBoundingClientRect();
            //     var labelPadding = 50;
            //     var offsetTop = fieldRect.top + window.scrollY - navRect.height - labelPadding;
                        
            //     window.scrollTo(0, offsetTop);
            // }
            
            // validate the fields on submit
            var i = 0;
            while (i < allFields.length) {
                var field = allFields[i],
                    fieldValue = field.value.trim(), //prevents user from submitting only whitespace
                    invalid =
                        (field.getAttribute("required") && !fieldValue) ||
                        (field.getAttribute("pattern") && fieldValue && !new RegExp(field.getAttribute("pattern")).test(fieldValue));

                if (shouldBeValidated(field)) {
                    if(invalid) {
                        // oninvalid="this.setCustomValidity('Please enter your name.')" 
                        // onkeyup="this.setCustomValidity('')" 
                        field.setAttribute("aria-invalid", "true");
                        addErrorMsg(field);
                        // scrollToField(field);
                        field.focus();
                        return false;
                    }
                    
                    field.removeAttribute("aria-invalid");
                }
                    i++;
            }

            grecaptcha.execute();
        }

        function onload(){
            var element = document.getElementById('submitBtn');
                element.onclick = validate;
        }
        
    </script>
    <?php include 'templates/header.php';?>
    <title>Contact | Kayla Chang</title>
</head>
<body>
    <h1 class="hidden">Contact | Kayla Chang</h1>
    <?php include 'templates/main_nav.php';?>
    <div class="contact-con">
        <div class="main-con-nav-po">
            <h2>Let's Connect.</h2>
            <h3>Ready to start a project? I’ll do my best to get in touch within the week.</h3>
            <form id="contact-form" action="contact.php" method="post">
                <div class="form-con">
                    <div>
                        <div class="input-error-con">
                            <label for="u-name">Name</label>
                            <input id="u-name" 
                            type="text" 
                            name="name" 
                            placeholder="Your Name" 
                            autocapitalize="words" 
                            spellcheck="false" 
                            autocorrect="off" 
                            required="required"
                            data-error-msg="Please enter your name."
                            data-validation="required" 
                            aria-required="true"
                            value="<?php echo ($is_success == False)?$_POST['name']:'';?>">  
                        </div>
                        
                        <div class="input-error-con">
                            <label for="u-email">Email</label>
                            <input id="u-email" 
                            type="email" 
                            name="email" 
                            placeholder="youremail@email.com" 
                            required="required"
                            data-error-msg="Please enter a valid email."
                            pattern="^[a-zA-Z0-9.!#$%&’*+\/\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
                            aria-required="true"
                            value="<?php echo ($is_success == False)?$_POST['email']:'';?>">
                        </div>

                        <div class="input-error-con">
                            <label for="e-subject">Subject</label>
                            <input id="e-subject" 
                            type="text" 
                            name="subject" 
                            placeholder="Your Subject" 
                            autocapitalize="on" 
                            required="required"
                            list="e-subject-options"
                            data-error-msg="Please enter a subject."
                            aria-required="true"
                            value="<?php echo ($is_success == False)?$_POST['subject']:'';?>">
                            <datalist id="e-subject-options">
                                <option value="Business Inquiry"></option>
                                <option value="Hello!"></option>
                                <option value="Report a Bug"></option>
                            </datalist>
                        </div>
                    </div>
                    
                    <div class="input-error-con">
                        <label for="e-message">Message</label>
                        <textarea rows="13" 
                        id="e-message"
                        name="message" 
                        placeholder="Your message here..." 
                        autocapitalize="on" 
                        required="required"
                        data-error-msg="Please enter a message."
                        aria-required="true"
                        value="<?php echo ($is_success == False)?$_POST['message']:'';?>"></textarea>
                    </div>
                </div>

                <div class="g-recaptcha"
                    data-sitekey="6Le7EeUkAAAAADr0vVydnzAORrpSanZJvxTa7o7p"
                    data-callback="onSubmit"
                    data-size="invisible"
                    data-badge="inline">
                </div>

                <p class="g-recaptcha-note">This site is protected by reCAPTCHA and the Google
                    <a href="https://policies.google.com/privacy">Privacy Policy</a> and
                    <a href="https://policies.google.com/terms">Terms of Service</a> apply.
                </p>

                <button id="submitBtn" type="submit" class="btn-large">Send</button>
            </form>
        </div>
        <!-- if a captcha response was sent, then that means the form was submitted. Therefore, display submit message -->
        <?php if($_POST['g-recaptcha-response']) 
            include 'templates/submit_message.php';
        ?>
    </div>
    
    <script>
        onload();
    </script>
    
    <?php include 'templates/footer.php';?>
    <!-- <script src="/public/js/main.js"></script> -->
    <script src="/public/js/contact.js"></script>
</body>
</html>