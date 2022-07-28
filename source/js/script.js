// настройки для слайдера - начало
$(".carousel").slick({
  dots: true,
  centerMode: true,
  centerPadding: false,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        centerMode: false,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});
// настройки для слайдера - конец

// состояние меню при отключённом js - начало
let navMainContainer = document.querySelector('.main-nav__container');
navMainContainer.classList.remove('main-nav__container--nojs');
// состояние меню при отключённом js - конец

// скрипт для переключения бургер меню и блокирования контента при открытом состоянии - начало
let navToggle = document.querySelector('.main-nav__burger-menu');
let body = document.querySelector('body');

navToggle.addEventListener('click', function () {
  if (navMainContainer.classList.contains('main-nav__container--closed')) {
    navMainContainer.classList.remove('main-nav__container--closed');
    navMainContainer.classList.add('main-nav__container--opened');
    body.classList.add('lock');
  } else {
    navMainContainer.classList.add('main-nav__container--closed');
    navMainContainer.classList.remove('main-nav__container--opened');
    body.classList.remove('lock');
  }
});
// скрипт для переключения бургер меню и блокирования контента при открытом состоянии - конец
