( function( $ ) {

	"use strict";

  // smooth scroll to anchor
  $('a[href^=\\#]').on('click', function(event){
    event.preventDefault();
    $('body').animate({scrollTop:$(this.hash).offset().top - 60}, 500);
  });

}( jQuery ) );
