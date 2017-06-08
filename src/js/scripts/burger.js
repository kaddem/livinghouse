$(document).ready(function(){

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

});