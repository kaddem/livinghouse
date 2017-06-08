$(document).ready(function(){
  
  function closeOutDropdown(dropDown, input) {

      $(document).mouseup(function (e){ // событие клика по веб-документу
        
        if ( $('.project-form__value-list').hasClass('project-form__value-list--active')) {
          var drop = $(dropDown); // тут указываем ID элемента
          var inp = $(input);
          if (inp.is(e.target)) {
            return;
          } else if (!drop.is(e.target) // если клик был не по нашему блоку
              && drop.has(e.target).length === 0) { // и не по его дочерним элементам
            drop.removeClass('project-form__value-list--active'); // скрываем его
          } 
        }

      });

  }
  
  closeOutDropdown('.project-form__value-list', '.project-form__value-label');
  
  
  $('.project-form__value-label').on('click', function(){
    
    var inputId = $( this ).attr('for');
    var inputThis = $ ('#' + inputId );
    var parent = $( this ).parent();
    
    if ( inputThis.prop("checked") ) {
      $('.project-form__value-list').removeClass('project-form__value-list--active');
      $( parent ).addClass('project-form__value-list--active');
    } else {
      $( parent ).removeClass('project-form__value-list--active');
    }
    
  });
  
});