$(window).on("load",function(){

	$(".scroll").mCustomScrollbar();

});

$(document).ready(function() {

	$('.big_slider').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  dots: false,
	  loop: true,
	  fade: true,
	  infinite: false,
	  asNavFor: '.miniature_slider'
	});

	$('.miniature_slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.big_slider',
	  arrows: false,
	  dots: false,
	  infinite: false,
	  focusOnSelect: true,
	  slickNext: $(".slider_1-nav .prev-btn"),
	  slickPrev: $(".slider_1-nav .next-btn"),
	  responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
      ]
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
	  dots: false,
	  responsive: [
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 850,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
      ]
	});

});

