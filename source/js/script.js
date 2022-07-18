// настройки для слайдера - начало

$(".carousel").slick({
  dots: true,
  centerMode: true,
  centerPadding: false,
  slidesToShow: 3,
  arrows: false,
  slidesToScroll: 1,
  variableWidth: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        variableWidth: false,

      }
    }
  ]
});

// настройки для слайдера - конец

// состояние меню при отключённом js - начало

let navMainContainer = document.querySelector('.main-nav__container');
navMainContainer.classList.remove('main-nav__container--nojs');

// состояние меню при отключённом js - конец
