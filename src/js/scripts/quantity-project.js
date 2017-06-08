$(document).ready(function(){

  $('.project-form__plus-minus').on('click', function(){
    var thisElem = $(this);
    var input = $('.project-form__input-quant');
    var value = Number( input.val() );

    if ( value == 0 && $(thisElem).hasClass( 'project-form__plus-minus--plus' ) ) {
      value = value + 1;
      $(input).val(value);
    } else if ( value == 0 ){
      return;
    } else if ( $(thisElem).hasClass( 'project-form__plus-minus--plus' ) ){
      value = value + 1;
      $(input).val(value);
    } else {
      value = value - 1;
      $(input).val(value);
    }

  })


  $('.project-form__action-label').on('click', function(){

    var parent = $(this).parent();
    var check = $(parent).find('.project-form__action-check');

    if ( $(check).prop("checked") ) {
      $(this).text('Добавить');
    } else {
      $(this).text('Добавлено');
    }

  });

});