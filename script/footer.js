let username = document.getElementById("name");
let email = document.getElementById("email");
let nameError = document.getElementById("name-error-message");
let emailError = document.getElementById("email-error-message");

function validateSubscribeForm(){
    alert("Hello! I am an alert box!!");
    if (username.value.length < 2){
        nameError.innerHTML = "Username is shorter than 2 characters"
    } else {
        nameError.innerHTML = ""
    }

    if (email.value.endsWith("@gmail.com") == false) {
        emailError.innerHTML = "Email must end with @gmail.com"
    } else {
        emailError.innerHTML = ""
    }
}