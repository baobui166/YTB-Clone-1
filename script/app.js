var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var main = document.querySelector(".main");

menuIcon.addEventListener("click", function () {
  sidebar.classList.toggle("small-sidebar");
  main.classList.toggle("large-main");
});
