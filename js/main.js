$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 15,
		nav: true,
		navText: [
			"<i class='fa-solid fa-circle-chevron-left fa-2x'></i>",
			"<i class='fa-solid fa-circle-chevron-right fa-2x'></i>",
		],
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			1024: {
				items: 3,
			},
		},
	});
});
