
document.addEventListener("DOMContentLoaded", function(event) {
    var header = document.getElementById("topNav");
    var foldHeight = header.offsetTop;

    window.addEventListener("scroll", function(event){
       if (window.pageYOffset < foldHeight) {
           header.style.position = "relative";
       }
       if (window.pageYOffset > foldHeight) {
           header.style.position = "fixed";
           header.style.top = "0px";
       }
   });
});