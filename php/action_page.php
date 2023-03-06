<!DOCTYPE html>
<html lang="en-AU">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dannielle Jones</title>
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="../css/styles.css">
</head>

<body>

<!-- Logo and Title -->
<header>
    <div class="container">
        <a href="/index.html"><h1>Bionic Fable</h1></a>
    </div>
</header>

<!--- Submitted Successfully --->
<section id="submitted">
    <div class="container">
        <h2>Success!</h2>
        <p>You have successfully signed up for development updates!</p>
        <p>We have added the following information to our files regarding your interests:</p>
        <p>Name: <?php echo $_POST["name"];?> <br>
            Email: <?php echo$_POST["email"];?><br>
            Message: <?php echo$_POST["message"];?></p>
        <p>You can now return to the home page.</p>
    </div>
    <!--- Sign up call-to-action button --->
    <div class="container">
        <div class="signupbutton">
            <span class="calltoactionmain"><a href="/index.html">Return</a></span>
        </div>
    </div>
</section>


</body>
</html>