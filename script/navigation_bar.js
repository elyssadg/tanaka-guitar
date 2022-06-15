function openSideBar(){
    document.getElementById("sidebar").style.width = "250px";
    document.getElementsByClassName(".open-sidebar").style.display = "none";
}

function closeSideBar(){
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("hamburger").style.marginLeft= "0";
    document.getElementsByClassName(".open-sidebar").style.display = "block";
}