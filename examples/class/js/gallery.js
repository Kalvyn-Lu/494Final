//Global Elements
var galleryRoot, thumbItems;
document.addEventListener("DOMContentLoaded", function() {
    galleryRoot = document.querySelector('#gallery');
    thumbItems = galleryRoot.querySelectorAll("a.thumb");
    _.forEach(thumbItems, function(item){
        item.addEventListener('click', loadGalleryImage);
    });
});

var loadGalleryImage = function(event){
    event.preventDefault();
    galleryRoot.querySelector("img").src = this.href;
};