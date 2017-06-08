$(window).load(function() {

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

});