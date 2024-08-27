<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize form inputs
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $phone = htmlspecialchars($_POST['phone']);
    $message = htmlspecialchars($_POST['message']);
    
    // Email configuration
    $to = "jordal05@icloud.com"; // Replace with your email address
    $subject = "New Property Visit Request from $name";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    // Email body
    $body = "<h2>Contact Request</h2>";
    $body .= "<p><strong>Name:</strong> $name</p>";
    $body .= "<p><strong>Email:</strong> $email</p>";
    $body .= "<p><strong>Phone:</strong> $phone</p>";
    $body .= "<p><strong>Message:</strong><br>$message</p>";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Your request has been sent successfully.";
    } else {
        echo "There was an error sending your request.";
    }
} else {
    echo "Invalid request method.";
}
?>
