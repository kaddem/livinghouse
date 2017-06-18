$(document).ready(function(){

  $('.project-form__title--accordeon').on('click', function(){

    var showBlock = $('#dropdown-table');

    if ( (showBlock ).hasClass('project-form__table--hide') ) {
      $( this ).addClass('project-form__title--open');
      $(showBlock).slideDown(200);
      $(showBlock).removeClass('project-form__table--hide');
    } else {
      $( this ).removeClass('project-form__title--open');
      $(showBlock).slideUp(200);
      $(showBlock).addClass('project-form__table--hide');
    }

  });

});