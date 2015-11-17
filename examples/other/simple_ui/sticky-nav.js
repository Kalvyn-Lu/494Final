
document.addEventListener("DOMContentLoaded", function(event) {
   window.addEventListener("scroll", function(event){
       if (window.pageYOffset < 308) {
           var header = document.getElementById("topNav");
           header.style.position = "relative";

       }
       if (window.pageYOffset > 308) {
           var header = document.getElementById("topNav");
           header.style.position = "fixed";
           header.style.top = "0px";
       }

   });
});