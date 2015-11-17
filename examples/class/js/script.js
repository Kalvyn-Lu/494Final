

//Global Elements
var listItems;
document.addEventListener("DOMContentLoaded", function() {
    listItems = document.querySelector('#mainList');
});


function changeBtnState(clickedElm) {
    clickedElm.classList.add("active");
    var elem = clickedElm.parentNode.firstChild;
    do {
        if(elem.nodeName != "#text"){
            if (elem.classList.contains("active") && elem != clickedElm) {
                elem.classList.remove("active");
            }
        }
    } while (elem = elem.nextSibling);
    return null;
}

function changeListItemDisplay(display, elm){
    changeBtnState(elm);
    if(display == "inline"){
        listItems.classList.remove("list-items-box");
    }else if(display =="box"){
        listItems.classList.add("list-items-box");
    }
}