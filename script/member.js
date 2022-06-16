let first = document.getElementById("first");
let last = document.getElementById("last");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let gender = document.getElementById("gender");
let agree = document.getElementById("terms-condition");

rform.addEventListener('submit',(event)=>{
    event.preventDefault();
    validateMemberForm();
});

function validateMemberForm(){
    var count = 0;

    if (first.value.length == 0){
        errorFirst.innerHTML = "First name can't be empty";
    } else {
        errorFirst.innerHTML = "";
        count += 1;
    }
    if (last.value.length == 0){
        errorLast.innerHTML = "Last name can't be empty";
    } else {
        errorLast.innerHTML = "";
        count += 1;
    }
    if (email.value.endsWith("@gmail.com") == false){
        errorEmail.innerHTML = "Email must end with @gmail.com";
    } else {
        errorEmail.innerHTML = "";
        count += 1;
    }
    if (phone.value.startsWith("08") == false || phone.value.length <= 2){
        errorPhone.innerHTML = "Phone must start with 08 and must be more than 2 characters";
    } else {
        errorPhone.innerHTML = "";
        count += 1;
    }
    if (gender.value.length == 0){
        errorGender.innerHTML = "Gender can't be empty";
    } else if (gender.value != "Male" && gender.value != "Female" && gender.value != "I prefer not to say") {
        errorGender.innerHTML = "Gender must be either Male, Female, or I prefer not to say";
    } else {
        errorGender.innerHTML = "";
        count += 1;
    }
    if (agree.checked == false){
        errorTerms.innerHTML = "You must agree with the terms and conditions";
    } else {
        errorTerms.innerHTML = "";
        count += 1;
    }

    if(count == 6){
        location.href = "../html/member.html";
    }
}