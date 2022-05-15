<?php
//get data from form  
$name = $_POST['name'];
$email= $_POST['email'];
$number= $_POST['phone']; 
$message= $_POST['message'];
$to = "panthikush@mail.com";
$subject = "Mail From Kush Panthi website";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone Nuumber =" . $number . 
"\r\n Message =" . $message;

$headers = "From: noreply@kushpanthi.com.np" . "\r\n";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}

//redirect
header("Location:thankyou.html)
?>
