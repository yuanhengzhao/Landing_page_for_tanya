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

$(function() {
	$('.picture').hover(function(e) {
		$('.picture').not(this).css({
		"-webkit-filter": "grayscale(100%)",
	    "-moz-filter": "grayscale(100%)",
	    "-ms-filter": "grayscale(100%)",
	    "-o-filter": "grayscale(100%)",
	    "filter": "grayscale(100%)",
	    "filter": "gray"
	    });
	},
	function(e) {
		$('.picture').not(this).css({
		"-webkit-filter": "grayscale(0%)",
	    "-moz-filter": "grayscale(0%)",
	    "-ms-filter": "grayscale(0%)",
	    "-o-filter": "grayscale(0%)",
	    "filter": "grayscale(0%)",
	    "filter": "none"
	    });});
});


jQuery(window).scroll(function(){
    var fromTopPx = 1; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        $('#backgroundpage').css({
		"-webkit-filter": "grayscale(100%)",
	    "-moz-filter": "grayscale(100%)",
	    "-ms-filter": "grayscale(100%)",
	    "-o-filter": "grayscale(100%)",
	    "filter": "grayscale(100%)",
	    "filter": "gray"
	    });
    }else{
        $('#backgroundpage').css({
		"-webkit-filter": "grayscale(0%)",
	    "-moz-filter": "grayscale(0%)",
	    "-ms-filter": "grayscale(0%)",
	    "-o-filter": "grayscale(0%)",
	    "filter": "grayscale(0%)",
	    "filter": "none"
	    });

    }
});
