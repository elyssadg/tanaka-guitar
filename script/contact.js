let username = document.getElementById("username");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let errorUser = document.getElementById("errorUser");
let errorPhone = document.getElementById("errorPhone");
let errorEmail = document.getElementById("errorEmail");
function validateForm(){
    if(username.value.length<2){
        errorUser.innerHTML = "Username is shorter than 2 characters"
    }else{
        errorUser.innerHTML = ""
    }
    if(phone.value.startsWith("08")==false){
        errorPhone.innerHTML = "Phone number must start with '08'"
    }else{
        errorPhone.innerHTML =""
    }
    if(email.value.endsWith("@gmail.com")==false){
        errorEmail.innerHTML="Email must end with @gmail.com"
    }else{
        errorEmail.innerHTML=""
    }
}