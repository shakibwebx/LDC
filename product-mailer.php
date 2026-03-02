<?PHP 
$to = "reception@the-dermatology-centre.co.uk, dermatologycentre@gmail.com"; 
$subject = "Ask Our Expert";
$headers = "From:info@the-dermatology-centre.co.uk";
$forward = 1;
$location = "thanks.html";

$name = $_POST["Name"];
$email = $_POST["Email"];
$phone = $_POST["Phone"];
$product = $_POST["Product"];
$visit = $_POST["Visit"];
$enquiry = $_POST["Enquiry"];

$date = date ("l, F jS, Y"); 
$time = date ("h:i A"); 



$msg = "The following details were submitted using the product enquiry form on the LDC Website. \nIt was submitted on $date at $time.\n\n"; 



if ($_SERVER['REQUEST_METHOD'] == "POST") {
	$msg .= "Name: " . $name . "\n"; 
	$msg .= "Email: " . $email . "\n";
	$msg .= "Phone: " . $phone . "\n";
	$msg .= "Which products are you interested in?: " . implode(", ",$product) . "\n\n";
	$msg .= "Have you visited The London Dermatology Centre before?: " . $visit . "\n\n";
	$msg .= "Enquiry: " . $enquiry . "\n";
}
else {
	$msg .= "Name: " . $name . "\n"; 
	$msg .= "Email: " . $email . "\n";
	$msg .= "Phone: " . $phone . "\n";
	$msg .= "Which products are you interested in?: " . implode(", ",$product) . "\n\n";
	$msg .= "Have you visited The London Dermatology Centre before?: " . $visit . "\n";
	$msg .= "Enquiry: " . $enquiry . "\n";
}

mail($to, $subject, $msg, $headers); 
if ($forward == 1) { 
    header ("Location:$location"); 
} 
else { 
    echo "Thank you for submitting our form. We will get back to you as soon as possible."; 
} 

?>