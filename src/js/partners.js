$(document).on('mainPageLoaded', function () {
//слайдер-партнеры
	$('.partners__list').slick({
		mobileFirst: true,
		arrows: false,
		prevArrow: '<button class="slick__button slick__button--simple slick__button--prev">\n' +
			'</button>',
		nextArrow: '<button class="slick__button slick__button--simple slick__button--next">\n' +
			'</button>',
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 3,
		centerMode: true,
		centerPadding: '9px',
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 5,
					arrows: true
				}
			},
			{
				breakpoint: 1919,
				settings: {
					slidesToShow: 6,
					arrows: true
				}
			}
		]

	});
});
