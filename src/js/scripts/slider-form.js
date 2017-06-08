$(document).ready(function(){
  // Ползунок для форм
  
  function sliderForm( inputStart, inputEnd, idSlider, dataStart, dataEnd ) {
    var priceStart = $(inputStart).data( dataStart );
    var priceEnd = $(inputEnd).data( dataEnd );

    $( idSlider ).slider({
      // orientation: "vertical",
      // step: 15,
      range: true,
      min: priceStart,
      max: priceEnd,
      values: [ priceStart, priceEnd ],
      slide: function( event, ui ) {
        $( inputStart ).val( ui.values[ 0 ] );
        $( inputEnd ).val( ui.values[ 1 ] );
      }
    });
    $( inputStart ).val( $( idSlider ).slider( "values", 0 ) );
    $( inputEnd ).val( $( idSlider ).slider( "values", 1 ) );

    // Изменение местоположения ползунка при вводиде данных в первый элемент input
    $( inputStart ).change(function(){
      var value1=$( inputStart ).val();
      var value2=$( inputEnd ).val();

      if (parseInt(value1) > parseInt(value2)){
        value1 = value2;
        $( inputStart ).val(value1);
      }
      $(idSlider).slider("values",0,value1); 
    });
        
    // Изменение местоположения ползунка при вводиде данных в второй элемент input  
    $( inputEnd ).change(function(){
      var value1=$( inputStart ).val();
      var value2=$( inputEnd ).val();

      if(parseInt(value1) > parseInt(value2)){
        value2 = value1;
        $( inputEnd ).val(value2);
      }
      $(idSlider).slider("values",1,value2);
    });

    // фильтрация ввода в поля
    jQuery('#amount_start, #amount_end').keypress(function(event){
      var key, keyChar;
      if(!event) var event = window.event;
      
      if (event.keyCode) key = event.keyCode;
      else if(event.which) key = event.which;
    
      if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
      keyChar=String.fromCharCode(key);
      
      if(!/\d/.test(keyChar)) return false;
    
    });

  }

  sliderForm('.projects-filter__cost--start', '.projects-filter__cost--end', '#project-slider-ui', 'proj-start', 'proj-end');
  sliderForm('.form__cost--start', '.form__cost--end', '#form-slider-ui', 'price-start', 'price-end');

});