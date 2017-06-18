$(document).ready(function(){

  // Определяем переменные для значка info
  var infoClass = 'project-form__info';
  var infoIcon = $('.' + infoClass);

  // Определяем переменные для модалки
  var modalClass = 'project-modal';
  var modal = $('.' + modalClass);

  infoIcon.on('click', function(){
    var logic;

    if ( $(this).hasClass(infoClass + '--open') ) {
      infoIcon.removeClass(infoClass + '--open');
    } else {
      infoIcon.removeClass(infoClass + '--open');
      $(this).addClass(infoClass + '--open');
    }

    if ( infoIcon.hasClass(infoClass + '--open') ) {
      modalOpen( this , modalClass);
    } else {
      modalClose( modalClass );
    }

    function modalOpen(infoItem, modalClass) {

      var iconCoordX = $(infoItem).offset().left;
      var iconCoordY = $(infoItem).offset().top;

      var modal = $('.' + modalClass);
      var modalWidth = modal.outerWidth();
      var modalHeight = modal.outerHeight();

      var modalCoordX = iconCoordX - 30;
      var modalCoordY = iconCoordY - modalHeight - 10;

      modal.addClass(modalClass + '--open');

      if ( $(window).width() > 1199 ) {
        modal.css({
          "top": modalCoordY, 
          "left": modalCoordX
        });
      } else if ( $(window).width() < 768 ) {
        modal.css({
          "top": modalCoordY + modalHeight + 40, 
          "left": 0,
          "right": 0,
          "margin": "auto"
        });
      } else {
        modal.css({
          "top": modalCoordY, 
          "left": "150px"
        });
      }

    }

    function modalClose(modalClass) {
      var modal = $('.' + modalClass);
      modal.removeClass(modalClass + '--open');
    }

  })

});