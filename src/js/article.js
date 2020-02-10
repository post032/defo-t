$('.article__products').slick({
	arrows: false,
	dots: false,
	prevArrow: '<button class="slick__button slick__button--prev">\n' +
		'</button>',
	nextArrow: '<button class="slick__button slick__button--next">\n' +
		'</button>',
	mobileFirst: true,
	infinite: true,
	variableWidth: true,
	responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 2,
				variableWidth: true,
				centerMode: false
			}
		},
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 3,
				variableWidth: true,
				centerMode: false
			}
		}
	]
});

// Подпишемся на ресайз и продиспатчим его для запуска
$(window).on('resize', function(e) {
	// Переменная, по которой узнаем запущен слайдер или нет.
	// Храним её в data
	var init = $(".article__gallery").data('init-slider');
	// Если планшет
	if (window.innerWidth >= 768 && window.innerWidth < 1920) {
		// Если слайдер не запущен
		if (init != 1) {
			// Запускаем слайдер и записываем в data init-slider = 1
			$('.article__gallery').slick({
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: false,
				dots: false,
			}).data({
				'init-slider': 1
			});
		}
	}
	// Если мобильный
	else {
		// Если слайдер запущен
		if (init == 1) {
			// Разрушаем слайдер и записываем в data init-slider = 0
			$('.article__gallery').slick('unslick').data({
				'init-slider': 0
			});
		}
	}
}).trigger('resize');


$('.article__consult').click(function(e) {
  e.preventDefault();
  $('.request-form').addClass('active');
  $('.article-content').addClass('form__overlay');
})

$('.close').click(function(e) {
  e.preventDefault();
  $('.request-form').removeClass('active');
  $('.article-content').removeClass('form__overlay');
})
