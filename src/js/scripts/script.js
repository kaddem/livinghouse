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


  // Ползунок для форм
  
  $(function() {
    var priceStart = $('.form__cost--start').data('price-start');
    console.log(priceStart);
    var priceEnd = $('.form__cost--end').data('price-end');
    console.log(priceStart);

    $( "#form-slider-ui" ).slider({
      // orientation: "vertical",
      // step: 15,
      range: true,
      min: priceStart,
      max: priceEnd,
      values: [ priceStart, priceEnd ],
      slide: function( event, ui ) {
        $( "#amount_start" ).val( ui.values[ 0 ] );
        $( "#amount_end" ).val( ui.values[ 1 ] );
      }
    });
    $( "#amount_start" ).val( $( "#form-slider-ui" ).slider( "values", 0 ) );
    $( "#amount_end" ).val( $( "#form-slider-ui" ).slider( "values", 1 ) );

    // Изменение местоположения ползунка при вводиде данных в первый элемент input
    $("input#amount").change(function(){
      var value1=$("input#amount_start").val();
      var value2=$("input#amount_1").val();
        if(parseInt(value1) > parseInt(value2)){
        value1 = value2;
        $("input#amount_start").val(value1);
      }
      $("#form-slider-ui").slider("values",0,value1); 
    });
        
    // Изменение местоположения ползунка при вводиде данных в второй элемент input  
    $("input#amount_1").change(function(){
      var value1=$("input#amount_start").val();
      var value2=$("input#amount_end").val();

      if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        $("input#amount_end").val(value2);
      }
      $("#form-slider-ui").slider("values",1,value2);
    });

    // фильтрация ввода в поля
    jQuery('#amount_start, #amount_end').keypress(function(event){
      var key, keyChar;
      if(!event) var event = window.event;
      
      if (event.keyCode) key = event.keyCode;
      else if(event.which) key = event.which;
    
      if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
      keyChar=String.fromCharCode(key);
      
      if(!/\d/.test(keyChar)) return false;
    
    });

  });


  // Закрытие дропдаунов по клику вне их
  // 
  function closeOutDropdown(dropDown, input) {

    $(document).mouseup(function (e){ // событие клика по веб-документу
      var drop = $(dropDown); // тут указываем ID элемента
      var inp = $(input);
      if (inp.is(e.target)) {
        return;
      } else if (!drop.is(e.target) // если клик был не по нашему блоку
          && drop.has(e.target).length === 0) { // и не по его дочерним элементам
        drop.hide(); // скрываем его
      } 
    });

  }

  closeOutDropdown('.form__dropdown', '.form__selected');
  closeOutDropdown('.projects-filter__dropdown', '.projects-filter__selected');
  closeOutDropdown('.form-review__dropdown', '.form-review__selected');

  function clickSelect(select, dropList){

    $(select).on('click', function(e){
    
      var dropDown = $(this).find(dropList);
      var everDropDown = $(dropList);
      
      if ( dropDown.is(':visible') ) {
        everDropDown.hide();
      } else if ( dropDown.is(':hidden') ) {
        everDropDown.hide();
        dropDown.show();
      } 
      
    });

  }

  clickSelect('.form__select', '.form__dropdown');
  clickSelect('.projects-filter__select', '.projects-filter__dropdown');
  clickSelect('.form-review__select', '.form-review__dropdown');

  


  // Закрытие дроптадунов по клику на другой селект
  // 
  // 
  // 
  $(function(){

    var dateEnd = $('#countdown-promo').data('timer-hours');
  
    var note = $('#note'),
      ts = new Date(2012, 0, 1),
      newYear = true;
    
    if((new Date()) > ts){
      // The new year is here! Count towards something else.
      // Notice the *1000 at the end - time must be in milliseconds
      ts = (new Date()).getTime() + dateEnd*24*60*60*1000;
      newYear = false;
    }


      
    $('#countdown-promo').countdown({
      timestamp : ts,
      callback  : function(days, hours, minutes, seconds){
        
        var message = "";
        
        message += days + " day" + ( days==1 ? '':'s' ) + ", ";
        message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
        message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
        message += seconds + " second" + ( seconds==1 ? '':'s' ) + " <br />";
        
        if(newYear){
          message += "left until the new year!";
        }
        else {
          message += "left to 10 days from now!";
        }
        
        note.html(message);
      }
    });
    
  });


});