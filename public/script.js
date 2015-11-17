

function toggleResponsiveMenu(menu){
  var nav = document.querySelector(menu.getAttribute("data-target"));
    if(nav.classList.contains("collapse")){
        nav.classList.remove("collapse");
    }else{
        nav.classList.add("collapse");
    }
}