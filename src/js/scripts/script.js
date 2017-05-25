$(document).ready(function(){

  console.log('yep, jQuery work!');
  $('.promo-slider').slick({
    dots: true
    // autoplay: true,
    // autoplaySpeed: 500
  });

  // $('.review__slider-preview-item')
  // 

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
      // },
      // {
      //   breakpoint: 768,
      //   settings: {
      //     slidesToShow: 0,
      //     settings: "unslick"
      //   }
      // }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

});

$(window).load(function () {
  function ratioPhoto(block) {
    $(block).each(function(){
      var itemWidth = $(this).width();
      var itemHeight = $(this).height();
      var itemRatio = itemHeight / itemWidth;

      var photo = $(this).find('img');
      var photoWidth = photo.width();
      var photoHeight = photo.height();
      var photoRatio = photoHeight / photoWidth;

      if ( itemRatio < photoRatio ) {
        photo.width('100%');
        photo.height('auto');
      } else if (itemRatio > photoRatio) {
        photo.height('100%');
        photo.width('auto');
      } else {
        photo.width('100%');
        photo.height('auto');
      }
    });
  }

  function ratioLetter(block) {
    $(block).each(function(){
      var itemWidth = $(this).width();
      var itemHeight = $(this).height();
      var itemRatio = itemHeight / itemWidth;

      var photo = $(this).find('img');
      var photoWidth = photo.width();
      var photoHeight = photo.height();
      var photoRatio = photoHeight / photoWidth;

      if ( itemRatio > photoRatio ) {
        photo.width('100%');
      } else if (itemRatio < photoRatio) {
        photo.height('100%');
      } else {
        photo.width('100%');
      }
    });
  }

  ratioPhoto('.review__slider-preview-item');
  ratioPhoto('.review__slider-big-item');
  ratioLetter('.review__letter-box');
  ratioLetter('.review__chart-box');
  ratioPhoto('.gallery__item');
  ratioPhoto('.project-card__photo');
  ratioPhoto('.review-card__visual');
  ratioPhoto('.project__photo');

  $(window).resize(function(){
    ratioPhoto('.review__slider-preview-item');
    ratioPhoto('.review__slider-big-item');
    ratioLetter('.review__letter-box');
    ratioLetter('.review__chart-box');
    ratioPhoto('.gallery__item');
    ratioPhoto('.project-card__photo');
    ratioPhoto('.review-card__visual');
    ratioPhoto('.project__photo');
  });

  function tabs(boxTabsLink, boxTabsContent, tabs){ 
    $(boxTabsLink + ' input').on('click', function(e){
      var attrLink = $(this).attr('id');
      console.log(attrLink);
      $(boxTabsContent + ' ' + tabs).css("display", "none");
      $(boxTabsContent + ' .' + attrLink).css("display", "block");
    }); 
  };


  tabs('#tabs-roof', '#tabs-roof-content', '.project-form__table-select--roof-content');
  tabs('#tabs-frame', '#tabs-frame-content', '.project-form__tab-item');



  // бургер, что тут еще скажешь? но без колы(
  $('.burger').on('click', function(e){
      e.preventDefault();
      if ( $(this).hasClass("burger--close") ) {
          $(this).removeClass('burger--close');
          $('.main-nav').slideUp(400);
          $('.main-nav').removeClass('main-nav--open');
          $('.page-header').removeClass('page-header--open');
      } else {
          $(this).addClass('burger--close');
          $('.main-nav').slideDown(400);
          $('.main-nav').addClass('main-nav--open');
          $('.page-header').addClass('page-header--open');
      }
  });

  $('.nav ul a').on('click', function(e){
      if ($(window).width() < 768) {
          $('.main-nav').slideUp(400);
          $('.burger').addClass('burger--open');
          $('.burger').removeClass('burger--close');
      };
  });


  $(window).resize(function(){
      if( $(window).width() > 767 ) {
          $('.main-nav').show();
      } else {
          $('.main-nav').slideUp(400);
          $('.main-nav').removeClass('main-nav--open');
          $('.page-header').removeClass('page-header--open');
          $('.burger').removeClass('burger--close');
      }
  });

  $(window).on('scroll', function(e) { // отслеживаем событие на элементе window
    if( $(window).width() < 768 ) {
        $('.main-nav').slideUp(400);
        $('.main-nav').removeClass('main-nav--open');
        $('.page-header').removeClass('page-header--open');
        $('.burger').removeClass('burger--close');
    }
  });

  if ( $(window).scrollTop() > 100 && $(window).width() > 767) {
    $('.page-header').addClass('page-header--scroll');
    $('.page-header').addClass('page-header--desktop');
  } else if ( $(window).scrollTop() > 100 ) {
    $('.page-header').addClass('page-header--scroll');
  }

  $(window).on('scroll', function(e) {

    if ( $(window).scrollTop() > 100 && $(window).width() > 1199 ) {
      $('.page-header').addClass('page-header--scroll');
      $('.page-header').addClass('page-header--desktop');
    } else if ( $(window).scrollTop() > 100 ) {
      $('.page-header').addClass('page-header--scroll');
      $('.page-header').removeClass('page-header--desktop');
    } else {
      $('.page-header').removeClass('page-header--scroll');
      $('.page-header').removeClass('page-header--desktop');
    }

  });

  function telMask(selector) {
    $(selector).mask('+7 (000) 000-00-00');
  }

  telMask('.contact-form__input--tel');
  telMask('.consult__input-tel');

  $('.projects-filter__select').on('click', function(){
    var dropdown = $(this).find('.projects-filter__dropdown');
    dropdown.toggle();
  })

  $('.form-review__select').on('click', function(){
    var dropdown = $(this).find('.form-review__dropdown');
    dropdown.toggle();
  })

  $('.form__select').on('click', function(){
    var dropdown = $(this).find('.form__dropdown');
    dropdown.toggle();
  })
  // кастомизация выпадающего списка - select
  // $('select').selecter();

});