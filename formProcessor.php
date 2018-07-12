<?php 
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$company = $_POST['company'];
$from = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$to = 'nscampbell303@gmail.com';
$subject = 'Message from your portfolio';
$headers = "From: $from\r\nReply To: $from\r\n";

//In the message
$msg = "From: $firstName $lastName \r";
$msg .= "Company: $company\r\r";
$msg .= "Message: \r$message";

$mailSent = mail($to, $subject, $msg, $headers);
?>

<!DOCTYPE html>
	<body>
		<h3 style="font-weight: 300; text-align: center;">
			<?php 
				if($mailSent) {
					echo "Your message has been sent to $to. Thank you!";
				} else {
					echo "Could not send the message. Please try again.";
				}
			?>
		</h3>
	</body>