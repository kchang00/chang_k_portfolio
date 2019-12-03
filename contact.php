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
            <form action="contact/data_contact.php" method="post">
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
    </div>

    <?php include 'footer.php';?>

    <script src="public/js/main_nav.js"></script>
</body>
</html>



