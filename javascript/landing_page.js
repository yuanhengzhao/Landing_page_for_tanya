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



var comments = ["When we sold our building in Milton, which was commercial with our apartment upstairs, Tanya's husband, Aldrin, took care of the deal. He introduced us to Tanya, who jumped in with both feet. Tanya helped Kimberly stage the apartment, brought in finishing touches, and gave us pointers along the way ... She always explained a feature, and the value buyers put into it and the value to our family specifically. Tanya really understood what we needed ... Thank you Tanya! <br> <p>-- Steve & Kimberly Bonin</p>",
			  "Tanya, thank you so much for helping us find our new home! You were very patient with us throughout the entire process, showing us several homes before we finally found the right one. We loved your enthusiasm and the time and effort you put in to finding us the perfect home. We will absolutely recommend you to any of our friends in the GTA.<br> <p>--James & Heidi Currier</p>",
			  "Thank you Tanya for all the information & guidance you provided, especially the staging. Your friendly, diligent, confident & professional approach assured me that you would help me achieve my goal & I did! The house sold in less than a week & for more than asking! In fact you are already in demand in my circle of friends…of course in the neighbourhood. You are highly recommended. Thank you once again. Keep up the good work & my family wishes you SUCESS in all your endeavors.<br><p>-- Ann D'souza<p>",
			  "Tanya was a pleasure to work with. Very professional and personable. Quick to understand our needs and preferences, gaining insights even we ourselves initially did not recognize. I would recommend Tanya without hesitation.<br><p>--Robert McBean</p>",
"WOW! Tanya is an amazing person all around. ... I came to a situation in which I needed to sell my house as quickly as possible and I honestly didn't know how I was going to do it, then I talked to Tanya and she put all of my worries at ease. Not only did she answer all of my questions she gave me peace of mind that everything was in her hands. She helped me stage my home and with that it sold in 9 days! Over asking! From the bottom of my heart THANK YOU! I could not have done this without such an amazing realtor and decorator! I could not have asked for more, Tanya knows her stuff!!!<br><p>--Michelle Strilive</p>",
"Hi, just a note to say thanks for all you have done for us throughout this process. As first time buyers, we had a lot of unanswered questions regarding the purchase of our home. Thank you for providing the answers to many of these and giving us informed advice on the homes that we visited!<br><p>-- By: Ann Smith</p>"];

var images = ['../assert/cover.jpg', '../assert/house-photo.jpg','../assert/Interior Photo.jpg' ];



window.onload = function displayContents(){
    $('#comment-information h1').html(comments[0]);
    var i = 1;
    var index =1;
    setInterval(
        function(){
            $('#comment-information h1').html(comments[i]).fadeIn(1000).delay(9000).fadeOut(1000);
            i++;
            if(i >= comments.length) 
            	i = 0;
            	
            	
        	$("#image-test").attr("src", images[i]);
                 index++;
                if(index >= images.length) 
                	index = 0;
        },11000);
};

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
