$('.slider').slick({
  dots: true,
});
$('.multiple-slider').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      adaptiveHeight: false,
      arrows: false,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          }
        ]

});
    

