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
    focusOnSelect: true
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
});