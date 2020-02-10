$(document).on('mainPageLoaded', function () {
	var previoslyProducts = $('.previosly__products');

	var previoslySliderInit = function () {
			previoslyProducts.slick({
				arrows: false,
				dots: false,
				mobileFirst: true,
				infinite: true,
				variableWidth: true,
				responsive: [
					{
						breakpoint: 767,
						settings: {
							slidesToShow: 2,
							variableWidth: true,
							centerMode: false
						}
					},
					{
						breakpoint: 1279,
						settings: {
							slidesToShow: 3,
							variableWidth: true,
							centerMode: false
						}
					},
					{
						breakpoint: 1919,
						settings: {
							slidesToShow: 5,
							variableWidth: true,
							centerMode: false
						}
					}
				]
			});
		};

	previoslySliderInit();
});
