"use strict";

const menu_sidebar = document.querySelector(".aside-sidebar");
const hamburger_open_menu = document.querySelector(".hamburger-menu-open");
const hamburger_close_menu = document.querySelector(".hamburger-menu-close");
const cart = document.querySelector(".cart");
const open_cart = document.querySelector(".cart-checkout-container");
const cartNumber = document.querySelector(".many-to-buy-text");
const numberOfProduct = document.querySelector(".cart-num");
const totalPriceProduct = document.querySelector(".total-price");
const add_to_cart = document.querySelector(".add-to-cart");
const icon_minus = document.querySelector(".icon-minus");
const icon_plus = document.querySelector(".icon-plus");
const cart_empty = document.querySelector(".cart-empty-body");
const cart_checkout = document.querySelector(".cart-checkout-body");
const zoomProduct = document.querySelector(".box-bigger");
const overlay_slider = document.querySelector(".overlay");
const close_slider = document.querySelector(".slider-close");

const slides = document.querySelectorAll(".box");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

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

let cartNum = 0;

icon_plus.addEventListener("click", function () {
  cartNum++;
  cartNumber.textContent = cartNum;
  // console.log(cartNum);
});

icon_minus.addEventListener("click", function () {
  if (cartNum > 0) {
    cartNum--;
    cartNumber.textContent = cartNum;
    // console.log(cartNum);
  } else {
    cartNumber.textContent = 0;
    // console.log(cartNum);
  }
});

add_to_cart.addEventListener("click", function () {
  if (cartNum === 0) {
    cart_checkout.style.display = "none";
    cart_empty.style.display = "block";
    return;
  } else if (cartNum > 0) {
    cart_empty.style.display = "none";
    cart_checkout.style.display = "block";
    numberOfProduct.textContent = cartNum;
    totalPriceProduct.textContent = `${"$" + 125 * cartNum}`;
  }
});

// const slider = function () {
//   // Functions
//   let curSlide = 0;
//   const maxSlide = slides.length;

//   const gotoSlide = function (slide) {
//     slides.forEach(
//       (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
//     );
//   };
//   gotoSlide(0);
//   // Next slide

//   const nextSlide = function () {
//     if (curSlide === maxSlide - 1) {
//       curSlide = 0;
//     } else {
//       curSlide++;
//     }

//     gotoSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const prevSlide = function () {
//     if (curSlide === 0) {
//       curSlide = maxSlide - 1;
//     } else {
//       curSlide--;
//     }
//     gotoSlide(curSlide);
//     activateDot(curSlide);
//   };

//   const init = function () {
//     gotoSlide(0);
//   };

//   btnRight.addEventListener("click", nextSlide);
//   btnLeft.addEventListener("click", prevSlide);
// };

// slider();
