$(document).on('mainPageLoaded', function () {
// слайдер отзывов
	$('.reviews__wrapper').slick({
		arrows: false,
		dots: false,
		prevArrow: '<button class="slick__button slick__button--prev">\n' +
			'</button>',
		nextArrow: '<button class="slick__button slick__button--next">\n' +
			'</button>',
		mobileFirst: true,
		infinite: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					arrows: true,
					variableWidth: false,
					slidesToShow: 2,
					infinite: true
				}
			},
			{
				breakpoint: 1919,
				settings: {
					arrows: true,
					variableWidth: false,
					slidesToShow: 3,
					infinite: true
				}
			}
		]
	});
});
