$(".carousel").slick({
  dots: true,
  centerMode: true,
  centerPadding: false,
  slidesToShow: 3,
  arrows: false,
  infinite: true,
  // slidesToScroll: 3
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        centerMode: false,
        centerPadding: '40px',
      }
    }
  ]
});
