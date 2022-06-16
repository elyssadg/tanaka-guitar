let username = document.getElementById("username");
let email = document.getElementById("email");
let errorUser = document.getElementById("errorUser");
let errorEmail = document.getElementById("errorEmail");

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