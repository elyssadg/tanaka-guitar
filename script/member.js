let first = document.getElementById("first");
let last = document.getElementById("last");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let gender = document.getElementById("gender");

function validateForm(){
    alert("Hello! I am an alert box!!");
    alert(first);
    if(first.value.length==0){
        errorFirst.innerHTML = "First name can't be empty"
    }else{
        errorFirst.innerHTML = ""
    }
    if(last.value.length==0){
        errorLast.innerHTML = "Last name can't be empty"
    }else{
        errorLast.innerHTML = ""
    }
    if(email.value.endsWith("@gmail.com")==false){
        errorEmail.innerHTML="Email must end with @gmail.com"
    }else{
        errorEmail.innerHTML=""
    }
    if(phone.value.startsWith("08")==false){
        errorPhone.innerHTML = "Phone number must start with '08'"
    }else{
        errorPhone.innerHTML =""
    }
    if (subject.value.length == 0){
        errorSubject.innerHTML = "Subject can't be empty"
    } else {
        errorSubject.innerHTML = ""
    }
    if (message.value.length == 0){
        errorMessage.innerHTML = "Message can't be empty"
    } else {
        errorMessage.innerHTML = ""
    }
    alert("asdfasdf");
}