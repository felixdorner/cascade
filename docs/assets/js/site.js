( function( $ ) {

	"use strict";

  /*--------------------------------------------------------------
	Smooth Scroll
	--------------------------------------------------------------*/

  $('a[href*="#"]').on('click',function(e) {
    e.preventDefault();
    var target = this.hash;
    var $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 900, 'swing', function () {
      window.location.hash = target;
    });
  });

  /*--------------------------------------------------------------
	Accordion
	--------------------------------------------------------------*/

  $(".c-faq__item").on("click", ".c-faq__item-title", function() {
    $(this).toggleClass("is-active").next().slideToggle();
  });

}( jQuery ) );
