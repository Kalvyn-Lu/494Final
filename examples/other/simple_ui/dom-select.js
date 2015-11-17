
document.addEventListener("DOMContentLoaded", function() {
    var navItems = document.querySelectorAll("#topNav > li");
    for(var i = 0; i <  navItems.length; i++){
        var liTag = navItems[i];
        var a = liTag.querySelector("a");
        if(a.href == window.location.href){
            liTag.classList.add('active');
        }
    }
});