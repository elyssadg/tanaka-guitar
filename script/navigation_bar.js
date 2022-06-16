function openSideBar(){
    document.getElementById("sidebar").style.width = "250px";
    document.getElementsByClassName(".open-sidebar").style.display = "none";
}

function closeSideBar(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementsByClassName(".open-sidebar").style.display = "block";
}

window.addEventListener("scroll", function(){
    var navbar = document.querySelector("navbar");
    navbar.classList.toggle('sticky', window.scrollY > 0);
});