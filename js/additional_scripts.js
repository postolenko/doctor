$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

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
	  focusOnSelect: true,
	  slickNext: $(".slider_1-nav .prev-btn"),
	  slickPrev: $(".slider_1-nav .next-btn")
	});

	$('#slider1 .prev-btn').click(function(){
	    $("#slider1 .miniature_slider").slick('slickPrev');
	});

	$('#slider1 .next-btn').click(function(){
	    $("#slider1 .miniature_slider").slick('slickNext');
	});

	$('.slider-2').slick({
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  arrows: true,
	  dots: false
	});

});

