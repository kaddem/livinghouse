$(document).ready(function(){

  function tabs(boxTabsLink, boxTabsContent, tabs){ 
    $(boxTabsLink + ' input').on('click', function(e){
      var attrLink = $(this).attr('id');
      $(boxTabsContent + ' ' + tabs).css("display", "none");
      $(boxTabsContent + ' .' + attrLink).css("display", "block");
    }); 
  };


  tabs('#tabs-roof', '#tabs-roof-content', '.project-form__table-select--roof-content');
  tabs('#tabs-frame', '#tabs-frame-content', '.project-form__tab-item');

});