$(function(){
	// Smooth Scroll
	$('a').smoothScroll({
		speed: 700
	});

	// Sticky Navigation

	$(window).scroll(function(){

	  var scrolled = $(window).scrollTop(); 
	  var mainTop = $('#mainNav').offset().top;

	  if(scrolled > mainTop){
	    $("ul.nav").addClass("sticky-nav");
	  } else{
	    $("ul.nav").removeClass("sticky-nav");
	  }

	});

});