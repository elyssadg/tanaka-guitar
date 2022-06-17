rform.addEventListener('submit',(event)=>{
    event.preventDefault();
    validateMemberForm();
});

function validateMemberForm(){
    let first = document.getElementById("first");
    let last = document.getElementById("last");
    let age = document.getElementById("age");
    let email = document.getElementById("email-member");
    let address = document.getElementById("address");
    let gender = document.getElementById("gender");
    let agree = document.getElementById("terms-condition");
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
    if (email.value.length == 0){
        errorEmail.innerHTML = "Email can't be empty";
    } else if (email.value.endsWith("@gmail.com") == false){
        errorEmail.innerHTML = "Email must end with @gmail.com";
    } else if (email.value.length <= 10){
        errorEmail.innerHTML = "Email must have an address";
    } else {
        errorEmail.innerHTML = "";
        count += 1;
    }
    if (address.value.length == 0){
        errorAddress.innerHTML = "Address can't be empty"
    } else {
        errorAddress.innerHTML = ""
        count += 1;
    }
    if (age.value.length == 0){
        errorAge.innerHTML = "Age can't be empty";
    } else if (age.value < 15){
        errorAge.innerHTML = "You must be 15 years old or older";
    } else {
        errorAge.innerHTML = "";
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

    if(count == 7){
        location.href = "../html/member.html";
    }
}