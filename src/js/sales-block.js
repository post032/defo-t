$(document).on('mainPageLoaded', function () {

	$('.sales').slick({
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
					variableWidth: false,
					slidesToShow: 1
				}
			},{
				breakpoint: 768,
				settings: "unslick" // destroys slick
			}

		]
	});

});
