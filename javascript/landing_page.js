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

var comments = ['"Tanya, thank you so much for helping us find our new home! You were very patient with us throughout the entire process, showing us several homes before we finally found the right one. We loved your enthusiasm and the time and effort you put in to finding us the perfect home. We will absolutely recommend you to any of our friends in the GTA."',
			  "WOW! Tanya is an amazing person all around. The love that she has for her career and the kindness and understanding she carries with her shows in her beautiful smile and success in selling any home. I came to a situation in which I needed to sell my house as quickly as possible and I honestly didn't know how I was going to do it, then I talked to Tanya and she put all of my worries at ease. Not only did she answer all of my questions she gave me peace of mind that everything was in her hands. She helped me stage my home and with that it sold in 9 days! Over asking! From the bottom of my heart THANK YOU! I could not have done this without such an amazing realtor and decorator! I could not have asked for more, Tanya knows her stuff!!!",
			  '"Thank you Tanya for all the information & guidance you provided, especially the staging. Your friendly, diligent, confident & professional approach assured me that you would help me achieve my goal & I did! The house sold in less than a week & for more than asking! In fact you are already in demand in my circle of friends. & of course in the neighbourhood. You are highly recommended. Thank you once again. Keep up the good work & my family wishes you SUCESS in all your endeavours."',
			  '"Tanya was a pleasure to work with. Very professional and personable. Quick to understand our needs and preferences, gaining insights even we ourselves intially did not recognize. I would recommend Tanya without hesitation."'];
var names = ["By: Ann D'souza","By: Ann D'souza", "By: Robert McBean", "By: Michelle Strilive"];			  

window.onload = function displayTweets(){
    $('#comment-information h1').html(comments[0]);
    $('#comment-information h2').html(names[0]);
    var i = 1;
    setInterval(
        function(){
            $('#comment-information h1').html(comments[i]).fadeIn(500).delay(1000).fadeOut(500);
             $('#comment-information h2').html(names[i]).fadeIn(500).delay(1000).fadeOut(500);
            i++;
            if(i >= names.length) i = 0;
        },10000);
};


$('#comment-area').width($(document).width());





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
