<?php
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $company = $_POST['company'];
    $from = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $captcha;
    if(isset($_POST['g-recaptcha-response'])) {
        $captcha = $_POST['g-recaptcha-response'];
    }
    
    $host_email = 'nscampbell@campbellsportfolio.com';

    $to = 'nscampbell303@gmail.com';
    $subject = 'Message from your portfolio';
    $headers = "From: $host_email\r\nReply To: $from\r\n";

    //In the message
    $msg = "From: $firstName $lastName \r";
    $msg .= "Company: $company\r\r";
    $msg .= "Message: \r$message";

?>

<?php

    $mailSent = mail($to, $subject, $msg, $headers);

    if($mailSent) {
        echo "Your message has been sent to $to. Thank you!";
//        reset($message);
    } else {
        echo "Your message could not be sent. Please try again!";
    }

    $secret = "6LcaaXAUAAAAAPn5PKDVF_I5y9JV5_ECJnG2s9Ji";
    $ip = $_SERVER['REMOTE_ADDR'];

    file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . $secret . "&captcha=" . $captcha . "&remoteip=" . $ip);

?>

