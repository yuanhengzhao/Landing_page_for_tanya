$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 300);
        return false;
      }
    }
  });
  
   $("div#backgroudpage").height($(window).height());
  
  
  
  
  
});

// $(function() {
	// $('.picture').hover(function(e) {
		// $(".picture:not(#thisid)").css({
		// "-webkit-filter": "grayscale(100%)",
	    // "-moz-filter": "grayscale(100%)",
	    // "-ms-filter": "grayscale(100%)",
	    // "-o-filter": "grayscale(100%)",
	    // "filter": "grayscale(100%)",
	    // "filter": "gray"
	    // });
	// });
// });