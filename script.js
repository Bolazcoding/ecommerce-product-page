"use script";

const menu_sidebar = document.querySelector(".aside-sidebar");
const hamburger_open_menu = document.querySelector(".hamburger-menu-open");
const hamburger_close_menu = document.querySelector(".hamburger-menu-close");
const cart = document.querySelector(".cart");
const open_cart = document.querySelector(".cart-checkout-container");
const zoomProduct = document.querySelector(".box-bigger");
const overlay_slider = document.querySelector(".overlay");
const close_slider = document.querySelector(".slider-close");

zoomProduct.addEventListener("click", function () {
  overlay_slider.classList.remove("hidden");
});

close_slider.addEventListener("click", function () {
  overlay_slider.classList.add("hidden");
});

hamburger_open_menu.addEventListener("click", function () {
  menu_sidebar.style.display = "block";
});

hamburger_close_menu.addEventListener("click", function () {
  menu_sidebar.style.display = "none";
});

cart.addEventListener("click", function () {
  open_cart.classList.toggle("hidden-cart");
});
