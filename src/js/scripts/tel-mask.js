$(document).ready(function(){

  function telMask(selector) {
    $(selector).mask('+7 (000) 000-00-00');
  }

  telMask('.contact-form__input--tel');
  telMask('.consult__input-tel');

});