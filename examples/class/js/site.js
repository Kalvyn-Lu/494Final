//Global Elements
var mainNav;
document.addEventListener("DOMContentLoaded", function() {
    mainNav = document.querySelector('#main-nav');
});



function toggleResponsiveMenu(menu){
    if (mainNav.style.display == 'none' || mainNav.style.display == "" ) {
        mainNav.style.display = 'block';
        mainNav.classList.add("menu-wrapper");
    }
    else {
        mainNav.style.display = 'none';
        mainNav.classList.remove("menu-wrapper");
    }
}