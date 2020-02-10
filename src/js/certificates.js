$(document).on('mainPageLoaded', function () {


	// compare cards slider
	$('.certificates .certificates__list').slick({
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
			},
			{
				breakpoint: 768,
				infinite: false,
				settings: {
					variableWidth: true,
					slidesToShow: 4
				}
			},
			{
				breakpoint: 960,
				infinite: false,
				settings: {
					variableWidth: false,
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1280,
				infinite: false,
				settings: "unslick" // destroys slick
			}
		]
	});


});
