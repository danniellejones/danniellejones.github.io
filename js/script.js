// Check form data is valid
function validateForm() {
    const name = document.forms["registerForm"]["name"].value;
    const email = document.forms["registerForm"]["email"].value;
    // let message = document.forms["registerForm"]["message"].value;

    if (name === "") {
        alert("Name must be filled out");
        return false;
    }
    if (email === "") {
        alert("Email must be filled out");
        return false;
    }
}

// Check that input has been entered and changes to valid/invalid image
function inputNotEmpty(inputId, minValue, imageId) {
    if ((document.getElementById(inputId).value.length >= minValue) && (isValidForTick(inputId))) {
        document.getElementById(imageId).src = "/assets/valid.png";
    } else {
        document.getElementById(imageId).src = "/assets/invalid.png";
    }
}

// Check that special field conditions are met for tick display (not full validation)
function isValidForTick(name) {
    // Email uses @ and it is not located at the start or end; contains a full stop
    if (name.toString() === "email") {
        return (document.getElementById(name).value.includes("@")) &&
            (document.getElementById(name).value.includes(".")) &&
            (!(document.getElementById(name).value.indexOf('.') === (document.getElementById(name).value.length - 1))) &&
            (!(document.getElementById(name).value.indexOf('@') === 0) &&
                !(document.getElementById(name).value.indexOf('@') === (document.getElementById(name).value.length - 1)))
    } else {
        return true;
    }
}

// Disable and enable the submit button
// function turnOnSubmitButton() {
//     document.getElementById('submitButton').disabled = false;
// }

// document.getElementById('email').addEventListener("keyup",  turnOnSubmitButton)