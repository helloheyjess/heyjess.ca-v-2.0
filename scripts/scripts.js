$(function(){
	// Smooth Scroll
	$('a').smoothScroll({
		speed: 700
	});

	// Sticky Navigation


	if ($(window).width() > 550) {
		$(window).scroll(function(){

		  var scrolled = $(window).scrollTop(); 
		  var mainTop = $('#mainNav').offset().top;

		  if(scrolled > mainTop){
		    $("ul.nav").addClass("sticky-nav");
		  } else{
		    $("ul.nav").removeClass("sticky-nav");
		  }

		});
	}

	// Dropdown Navigation for Mobile
	$('.fa-bars').on('click', function() {
	  $('.nav').toggleClass('show-me');
	});
	$('.nav a').on('click', function() {
		$('.nav').toggleClass('show-me');
	});

});