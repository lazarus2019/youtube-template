var menuIcon = document.querySelector(".menu-icon");
var menuSinglePage = document.querySelectorAll(".menu-single-page");
var sidebar = document.querySelector(".sidebar");
var sidebar_page = document.querySelector(".single-page");
var container = document.querySelector(".container");
var black_layout = document.querySelector(".black-layout");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}

menuSinglePage.forEach(
    menu => menu.onclick = function(){
        sidebar_page.classList.toggle("show-menu");
        black_layout.classList.toggle("active-menu");
    }
)
