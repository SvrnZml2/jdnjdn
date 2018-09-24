<?php

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    $name = trim($_POST['username']);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST['message']);
    if(isset($_POST['g-recaptcha-response']))
    {
        $captcha = $_POST['g-recaptcha-response'];
    }

    if(empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($message) OR empty($captcha))
    {
        http_response_code(400);
		echo "Votre message n'a pu être envoyé !";
        exit;
    }

    $recipient = "rossi56@hotmail.fr";
    $subject = "Nouveau message de $name";


    $email_content = "Nom: $name\n";
    $email_content = "Email: $email\n";
    $email_content = "Message: $message\n";
    $email_header = "De: $name <$email>";

    $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=6LdTzHEUAAAAAFL3I70-a7kQoV-iZ5QTDHbM_39v&response=".$captcha."&remoteip=".$_SERVER["REMOTE_ADDR"]);
    $json = json_decode($response, true);
    if($json['success'] == true)
    {
        if(mail($recipient, $subject, $email_content, $email_header))
        {
            http_response_code(200);
           header('Location: index.php#reload');
        }
        else
        {
            http_response_code(500);
            echo "Votre message n'a pu être envoyé !";
        }
    }
    else
    {
        http_response_code(400);
        echo "erreur !";
    }
}