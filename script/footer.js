let uname = document.getElementById("name");
let gmail = document.getElementById("email");
let unameError = document.getElementById("name-error-message");
let gmailError = document.getElementById("email-error-message");

rform.addEventListener('submit', (event) => {
    event.preventDefault();
    validateSubscribeForm();
});

function validateSubscribeForm(){
    var count = 0;

    if (name.value.length == 0){
        unameError.innerHTML = "Name can't be empty";
    } else if (name.value.length < 2){
        unameError.innerHTML = "Name must be more than 2 characters";
    } else {
        unameError.innerHTML = "";
        count += 1;
    }

    if (gmail.value.length == 0){
        gmailError.innerHTML = "Email can't be empty";
    } else if (gmail.value.endsWith("@gmail.com") == false){
        gmailError.innerHTML = "Email must end with @gmail.com";
    } else {
        gmailError.innerHTML = "";
        count += 1;
    }

    if (count == 2){
        location.href = "../html/home.html";
    }
}