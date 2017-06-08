$(document).ready(function(){

  // Закрытие дропдаунов по клику вне их

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

});