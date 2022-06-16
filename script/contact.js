let username = document.getElementById("username");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let errorUser = document.getElementById("errorUser");
let errorPhone = document.getElementById("errorPhone");
let errorEmail = document.getElementById("errorEmail");
let errorSubject = document.getElementById("errorSubject");
let errorMessage = document.getElementById("errorMessage");

rform.addEventListener('submit', (event) => {
    event.preventDefault();
    validateForm();
});

function validateForm(){
    var count = 0;
    if (username.value.length == 0){
        errorUser.innerHTML = "Name can't be empty"
    } else if(username.value.length<2){
        errorUser.innerHTML = "Name must be more than to characters"
    }else{
        errorUser.innerHTML = ""
        count += 1;
    }
    if (phone.value.length == 0){
        errorPhone.innerHTML = "Phone can't be empty"
    } else if(phone.value.startsWith("08")==false){
        errorPhone.innerHTML = "Phone number must start with '08'"
    }else{
        errorPhone.innerHTML =""
        count += 1;
    }
    if (email.value.length == 0){
        errorEmail.innerHTML = "Email can't be empty"
    } else if(email.value.endsWith("@gmail.com")==false){
        errorEmail.innerHTML="Email must end with @gmail.com"
    }else{
        errorEmail.innerHTML=""
        count += 1;
    }
    if (subject.value.length == 0){
        errorSubject.innerHTML = "Subject can't be empty"
    } else {
        errorSubject.innerHTML = ""
        count += 1;
    }
    if (message.value.length == 0){
        errorMessage.innerHTML = "Message can't be empty"
    } else {
        errorMessage.innerHTML = ""
        count += 1;
    }

    if (count == 5){
        location.href = "../html/contact-us.html";
    }
}