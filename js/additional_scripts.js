$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {		

	// $("select").each(function() {

	// 	$(this).select2({
	// 		minimumResultsForSearch: Infinity,
	// 		width: '100%'
	// 	});

	// });

	$('.big_slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  fade: true,
	  asNavFor: '.miniature_slider'
	});

	$('.miniature_slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.big_slider',
	  arrows: false,
	  dots: false,
	  focusOnSelect: true
	});

});

