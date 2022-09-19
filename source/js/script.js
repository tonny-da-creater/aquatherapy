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

// скрипт для переключения бургер меню и блокирования контента при открытом состоянии - начало
let navToggle = document.querySelector('.burger-menu');
let body = document.querySelector('body');
let nav = document.querySelector('.main-nav');

navToggle.addEventListener('click', function () {
  if (nav.classList.contains('main-nav--closed')) {
    nav.classList.remove('main-nav--closed');
    this.classList.add('burger-menu--open');
    body.classList.add('lock');
  } else {
    nav.classList.add('main-nav--closed');
    this.classList.remove('burger-menu--open');
    body.classList.remove('lock');
  }
});
// скрипт для переключения бургер меню и блокирования контента при открытом состоянии - конец
