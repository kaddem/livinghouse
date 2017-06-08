$(document).ready(function(){

  $('.review__slider-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.review__slider-preview'
  });

  $('.review__slider-preview').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.review__slider-big',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });

});