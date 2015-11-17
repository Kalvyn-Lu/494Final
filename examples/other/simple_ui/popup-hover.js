
document.addEventListener("DOMContentLoaded", function() {
    var hoverItems = document.querySelectorAll(".profile-list > li");
    for(var i = 0; i <  hoverItems.length; i++){
        var profileItem = hoverItems[i];
        profileItem.addEventListener("mouseover", function(){
            this.querySelector(".bio").style.display = "block";
        });
        profileItem.addEventListener("mouseout", function(){
            this.querySelector(".bio").style.display = "none";
        });
    }
});
