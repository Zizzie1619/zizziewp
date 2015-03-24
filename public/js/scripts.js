// JavaScript Document


// photo grid

(function( $ ){
  $.fn.hoverGrid = function( options ) {  
	var settings = $.extend( {
      'itemClass' : '.item'
    }, options);
  
    return this.each(function() {       
		var hoverGrid = $(this);
		hoverGrid.addClass('hover-grid');
		hoverGrid.find(settings.itemClass).addClass('hover-grid-item');
		
		$(hoverGrid).find(settings.itemClass).hover(function () {
			$(this).find('div.caption').stop(false, true).fadeIn(200);
		},
        function () {
            $(this).find('div.caption').stop(false, true).fadeOut(200);
        });
    });
  };
})( jQuery );

//rounded images

/*$(document).ready(function(){

  $(".rounded-img, .rounded-img2").load(function() {
    $(this).wrap(function(){
      return '<span class="' + $(this).attr('class') + '" style="background:url(' + $(this).attr('src') + ') no-repeat center center; width: ' + $(this).width() + 'px; height: ' + $(this).height() + 'px;" />';
    });
    $(this).css("opacity","0");
  });

});*/
