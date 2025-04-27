'use strict';

const menu_sidebar = document.querySelector('.aside-sidebar');
const hamburger_open_menu = document.querySelector('.hamburger-menu-open');
const hamburger_close_menu = document.querySelector('.hamburger-menu-close');
const cart = document.querySelector('.cart');
const open_cart = document.querySelector('.cart-checkout-container');
const cartNumber = document.querySelector('.many-to-buy-text');
const numberOfProduct = document.querySelector('.cart-num');
const totalPriceProduct = document.querySelector('.total-price');
const add_to_cart = document.querySelector('.add-to-cart');
const icon_minus = document.querySelector('.icon-minus');
const icon_plus = document.querySelector('.icon-plus');
const cart_empty = document.querySelector('.cart-empty-body');
const cart_checkout = document.querySelector('.cart-checkout-body');
const zoomProduct = document.querySelector('.box-bigger');
const overlay_slider = document.querySelector('.overlay');
const close_slider = document.querySelector('.slider-close');
const imgChanged = document.querySelector('.image-box');
const imgOverlayChanged = document.querySelector('.image-box-overlay');
const btnLeft = document.querySelectorAll('.slider__btn--left');
const btnRight = document.querySelectorAll('.slider__btn--right');

zoomProduct.addEventListener('click', function () {
  overlay_slider.classList.remove('hidden');
});

close_slider.addEventListener('click', function () {
  overlay_slider.classList.add('hidden');
});

hamburger_open_menu.addEventListener('click', function () {
  menu_sidebar.style.display = 'block';
});

hamburger_close_menu.addEventListener('click', function () {
  menu_sidebar.style.display = 'none';
});

cart.addEventListener('click', function () {
  open_cart.classList.toggle('hidden-cart');
});

let cartNum = 0;

icon_plus.addEventListener('click', function () {
  cartNum++;
  cartNumber.textContent = cartNum;
  // console.log(cartNum);
});

icon_minus.addEventListener('click', function () {
  if (cartNum > 0) {
    cartNum--;
    cartNumber.textContent = cartNum;
    // console.log(cartNum);
  } else {
    cartNumber.textContent = 0;
    // console.log(cartNum);
  }
});

add_to_cart.addEventListener('click', function () {
  if (cartNum === 0) {
    cart_checkout.style.display = 'none';
    cart_empty.style.display = 'block';
    return;
  } else if (cartNum > 0) {
    cart_empty.style.display = 'none';
    cart_checkout.style.display = 'block';
    numberOfProduct.textContent = cartNum;
    totalPriceProduct.textContent = `${'$' + 125 * cartNum}`;
  }
});

let images = [
  './images/image-product-1.jpg',
  './images/image-product-2.jpg',
  './images/image-product-3.jpg',
  './images/image-product-4.jpg',
];

let currentIndex = 0;

btnRight.forEach(function (right) {
  right.addEventListener('click', function () {
    currentIndex = currentIndex + 1;

    if (currentIndex == images.length) {
      currentIndex = 0;
    }

    imgChanged.src = images[currentIndex];
    imgOverlayChanged.src = images[currentIndex];
    console.log(currentIndex);
  });
});

btnLeft.forEach(function (left) {
  left.addEventListener('click', function () {
    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
      currentIndex = images.length - 1;
    }

    imgChanged.src = images[currentIndex];
    imgOverlayChanged.src = images[currentIndex];
  });
});

const image1 = document.querySelectorAll('.image-thumbnail-1');
const image2 = document.querySelectorAll('.image-thumbnail-2');
const image3 = document.querySelectorAll('.image-thumbnail-3');
const image4 = document.querySelectorAll('.image-thumbnail-4');

image1.forEach(function (img) {
  img.addEventListener('click', function () {
    imgChanged.src = images[0];
    imgOverlayChanged.src = images[0];

    document.querySelectorAll('.image-thumbnail').forEach(function (e) {
      e.classList.remove('active-img');
    });
    this.classList.add('active-img');
  });
});

image2.forEach(function (img) {
  img.addEventListener('click', function () {
    imgChanged.src = images[1];
    imgOverlayChanged.src = images[1];

    document.querySelectorAll('.image-thumbnail').forEach(function (e) {
      e.classList.remove('active-img');
    });
    this.classList.add('active-img');
  });
});

image3.forEach(function (img) {
  img.addEventListener('click', function () {
    imgChanged.src = images[2];
    imgOverlayChanged.src = images[2];

    document.querySelectorAll('.image-thumbnail').forEach(function (e) {
      e.classList.remove('active-img');
    });
    this.classList.add('active-img');
  });
});

image4.forEach(function (img) {
  img.addEventListener('click', function () {
    imgChanged.src = images[3];
    imgOverlayChanged.src = images[3];

    document.querySelectorAll('.image-thumbnail').forEach(function (e) {
      e.classList.remove('active-img');
    });
    this.classList.add('active-img');
  });
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
