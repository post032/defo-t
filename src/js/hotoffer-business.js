$(document).on('mainPageLoaded', function () {

	$('.hotoffer-business .hotoffer__list .row').slick({
		arrows: false,
		dots: false,
		mobileFirst: true,
		infinite: false,
		variableWidth: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 320,
				infinite: false,
				settings: {
					variableWidth: true,
					slidesToShow: 1
				}
			},{
				breakpoint: 767,
				settings: "unslick" // destroys slick
			}

		]
	});

});
