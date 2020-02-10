function loadLazyImages() {
	$('.lazy-image').each(function() {
		if ($(this).attr('data-src')) {
			$(this).attr('src', $(this).attr('data-src'));
			$(this).on('load', function() {
				$(window).trigger('resize');
			});
		}
	});
}
function loadLazyBackgrounds() {
	$('.lazy-background').each(function() {
		if ($(this).attr('data-style')) {
			$(this).attr('style', $(this).attr('data-style'));
		}
	});
}

$(document).ready(function() {
	loadLazyImages();
	$(document).trigger('mainPageLoaded');
	loadLazyBackgrounds();
});

$(document).on('mainPageLoaded', function () {
	var WINDOW_WIDTH = {
		mobile: 320,
		tablet: 768,
		laptop: 1280,
		desktop: 1920
	};

	var SLICK_BREAKPOINTS = {
		tablet: 767,
		laptop: 1279,
		desktop: 1919
	};

	var SCROLL_TOP = {
		tablet: 120,
		laptop: 120,
		desktop: 120
	};

	var COMPARE_BRAKEPOINT = {
		tablet: 568
	};

	var KeyboardKey = {
		ENTER: 'Enter',
		ESCAPE: 'Esc',
		ESCAPE_IE: 'Escape',
	};

	var ESCAPE_KEYS = [
		KeyboardKey.ESCAPE,
		KeyboardKey.ESCAPE_IE,
	];

	var isEnterKey = function (evt) {
		return evt.key === KeyboardKey.ENTER;
	};

	var isEscapeKey = function (evt) {
		return ESCAPE_KEYS.indexOf(evt.key) > -1;
	};

	var isEscapeEvent = function (evt, action) {
		if (isEscapeKey(evt)) {
			action();
		}
	};

	var isEnterEvent = function (evt, action) {
		if (isEnterKey(evt)) {
			action();
		}
	};

	var productCard = document.querySelector('.catalog-element');

	// подключение скроллбара
	$('.scrollbar-inner').scrollbar();

	// слайдер в первом блоке
	$('.intro__slider').slick({
		arrows: false,
		dots: false
	});

	//аккордеон
	var activateAccordion = function (element) {
		element.click(function () {
			element.not(this).next().slideUp();
			$(this).next().slideToggle();
			element.toggleClass('active');
			element.not(this).removeClass('active');
		});
	};

	/*Плавный скролл якорных ссылок*/
	$("body").on('click', '[href*="#"]', function(e){
		var fixed_offset = 200;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 500);
		e.preventDefault();
	});
	/*var anchors = document.querySelectorAll('[href^="#"]'); //выбираем все ссылки к якорю на странице
	var speed = 1;  // скорость (чем меньше значение - тем больше скорость)

	for (var i = 0; i < anchors.length; i++) {
		anchors[i].addEventListener('click', function(evt) {
			evt.preventDefault();

			var scrollTop = window.pageYOffset;
			var hash = this.href.replace(/[^#]*(.*)/, '$1');  // к id элемента, к которому нужно перейти
			var offsetTop = document.querySelector(hash).getBoundingClientRect().top;  // отступ от окна браузера до id
			var start = null;

			requestAnimationFrame(step);  // подробнее про функцию анимации [developer.mozilla.org]

			function step(time) {
				if (start === null) start = time;
				var progress = time - start;
				var range = (offsetTop < 0 ? Math.max(w - progress/speed, scrollTop + offsetTop) : Math.min(scrollTop + progress/speed, scrollTop + offsetTop));
				window.scrollTo(0, range);

				if (range != scrollTop + offsetTop) {
					requestAnimationFrame(step)
				} else {
					location.hash = hash  // URL с хэшем
				}
			}
		}, false);
	}*/
	/*var anchorLinks = function (evt) {
		evt.preventDefault();

		var linkId  = $(this).attr('href'),//забираем идентификатор бока с атрибута href
			blockTop = $(linkId).offset().top - 100;//узнаем высоту от начала страницы до блока на который ссылается якорь

		$('body,html').animate({
			scrollTop: top
		}, 1500);//анимируем переход на расстояние - top за 1500 мс
	};*/
	var killSlick = function (slider) {
		slider.slick('unslick');
	};

	window.common = {
		WINDOW_WIDTH: WINDOW_WIDTH,
		SLICK_BREAKPOINTS: SLICK_BREAKPOINTS,
		SCROLL_TOP: SCROLL_TOP,
		COMPARE_BRAKEPOINT: COMPARE_BRAKEPOINT,
		activateAccordion: activateAccordion,
		productCard: productCard,
		isEnterKey: isEnterKey,
		isEscapeKey: isEscapeKey,
		isEscapeEvent: isEscapeEvent,
		isEnterEvent: isEnterEvent,
		killSlick: killSlick
	}
});
