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
