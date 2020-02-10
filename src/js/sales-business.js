$(document).on('mainPageLoaded', function () {

	$('.sales-business').slick({
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
				infinite: false,
				settings: {
					variableWidth: true,
					slidesToShow: 2
				}
			},{
				breakpoint: 1280,
				settings: "unslick" // destroys slick
			}

		]
	});

});
