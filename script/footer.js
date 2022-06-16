let username = document.getElementById("name");
let email = document.getElementById("email");
let nameError = document.getElementById("name-error-message");
let emailError = document.getElementById("email-error-message");

rform.addEventListener('submit', (event) => {
    event.preventDefault();
    validateSubscribeForm();
});

function validateSubscribeForm(){
    var result = true

    if (username.value.length < 2){
        nameError.innerHTML = "Username is shorter than 2 characters"
        result = false
    } else {
        nameError.innerHTML = ""
    }

    if (email.value.endsWith("@gmail.com") == false) {
        emailError.innerHTML = "Email must end with @gmail.com"
        result = false
    } else {
        emailError.innerHTML = ""
    }

    return result
}