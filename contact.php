<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>PHP Contact Form</title>
</head>
<body>
    <h2>CONTACT</h2>
    <form action="contact/data_contact.php" method="post">
        <!-- method="get" makes data in contact form visible in url. use method="post" for sensitive data liek password -->
        <!-- action is the reciever -->
        <!-- for attribute must be same as id of input to link them together -->
        <!-- name attribute can be anything we want to name it. it's for back-end -->
        <label for="u-name">Name</label>
        <input id="u-name" type="text" name="name" placeholder="name">

        <label for="u-email">Email</label>
        <input id="u-email" type="email" name="email" placeholder="email">

        <label for="e-subject">Subject</label>
        <input id="e-subject" type="text" name="subject" placeholder="subject">

        <label for="e-message">Message</label>
        <textarea id="e-message" name="message"></textarea>

        <button type="submit">Submit</button>

    </form>

</body>
</html>



