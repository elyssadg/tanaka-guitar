let username = document.getElementById("name");
let email = document.getElementById("email");
let nameError = document.getElementById("name-error-message");
let emailError = document.getElementById("email-error-message");

rform.addEventListener('submit', (event) => {
    event.preventDefault();
    validateSubscribeForm();
});

function validateSubscribeForm(){
    var count = 0;

    if (username.value.length < 2){
        nameError.innerHTML = "Username is shorter than 2 characters"
    } else {
        nameError.innerHTML = ""
        count += 1;
    }

    if (email.value.endsWith("@gmail.com") == false) {
        emailError.innerHTML = "Email must end with @gmail.com"
    } else {
        emailError.innerHTML = ""
        count += 1;
    }

    if (count == 2){
        location.href = "../html/home.html";
    }
}