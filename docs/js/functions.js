( function( $ ) {

	"use strict";

  // check where the shoppingcart-div is
  var offset = $('#affix').offset();
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    // check the visible top of the browser
    if (offset.top<scrollTop) {
      $('#affix').addClass('fixed');
    } else {
      $('#affix').removeClass('fixed');
    }
  });

  // smooth scroll to anchor
  $('a[href^=\\#]').on('click', function(event){
    event.preventDefault();
    $('body').animate({scrollTop:$(this.hash).offset().top - 60}, 500);
  });

}( jQuery ) );
