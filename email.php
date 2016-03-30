<?php 

$To = ''; 
$Subject = ''; 
$Message = ''; 
$Headers = "From: sender@yourdomain.com \r\n" . 
"Reply-To: sender@yourdomain.com \r\n" . 
"Content-type: text/html; charset=UTF-8 \r\n"; 
  
mail($To, $Subject, $Message, $Headers); 
?>
