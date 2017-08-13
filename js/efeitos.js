/*Exemplos de selecter usando jQuery --> Olhar os arquivos CSS tambem para as transicoes*/
$(document).ready(function() {

	// $("#banner h1").on("mouseover", function () {
	// 	$("#banner h1").css({"color":"red", "font-size": "10em", "transition": "1s"});
	// });

	// $("#banner h1").on("mouseout", function () {
	// 	$("#banner h1").css({"color":"#fff", "font-size": "92px", "transition": "1s"});
	// });

	$("#banner h1").on("mouseover", function () {
		$("#banner h1").addClass("efeito");

	}).on("mouseout", function () {
		$("#banner h1").removeClass("efeito");
	});

	$("#input-search").on("focus", function () {
		$("li.search").addClass("ativo");

	}).on("blur", function () {
		$("li.search").removeClass("ativo");
	});

	$(".thumbnails").owlCarousel({
		loop: true,
		margin: 10,
		// nav: true,
		// navText: ["Anterior", "Proximo"],
		responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 2
			},
			1000: {
				items: 4	
			}
		},
	    autoplay: true,
	    autoplayTimeout: 4000,
	    autoplayHoverPause: true
	});

	// var owl = $(".thumbnails").data('owlCarousel');

	// $('#btn-news-prev').on("click", function() {
	// 	owl.prev();
	// });

	// $('#btn-news-next').on("click", function() {
	// 	owl.next();
	// });

	var owl = $('.owl-carousel');
	
	owl.owlCarousel();
	
	// Go to the next item
	$('#btn-news-next').click(function() {
	    owl.trigger('next.owl.carousel', [250]);
	});
	// Go to the previous item
	$('#btn-news-prev').click(function() {
	    // With optional speed parameter
	    // Parameters has to be in square bracket '[]'
	    owl.trigger('prev.owl.carousel', [250]);
	});

	$('#btn-bars').on("click", function () {

		$("header").toggleClass("open-menu");
	});

	$('.btn-close').on("click", function () {

		$("header").removeClass("open-menu");
	});

});