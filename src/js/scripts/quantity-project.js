$(document).ready(function(){

  function abc2(n) {
    n += "";
    n = new Array(4 - n.length % 3).join("U") + n;
    return n.replace(/([0-9U]{3})/g, "$1 ").replace(/U/g, "");
  }

  $('.project-form__plus-minus').on('click', function(){
    var thisElem = $(this);
    var input = $('.project-form__input-quant');
    var value = Number( input.val() );
    var price = $('#pile-price').data( 'one-price' );

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

    var priceSumm = abc2(price * value);

    $('#price-summ').text(priceSumm);

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