$(document).on('mainPageLoaded', function () {
	//иконки корзины
	var basketActionIconsList = document.querySelectorAll('.icons--action');

	basketActionIconsList.forEach(function(item) {
		var basketActionIcons = item.querySelectorAll('.buy-icon');

		basketActionIcons.forEach(function(icon) {
			icon.addEventListener('click', function(evt){
				evt.preventDefault();

				this.classList.toggle('buy-icon--active');
			})
		});

	});
	var catalogPageWrap = document.querySelector('.catalog-page__wrapper');

	//карточка товара в слайдере
	var productsSlider = $('.products__list');

	var productsSliderInit = function () {
		if(document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop ) {
			productsSlider.slick({
				arrows: false,
				dots: false,
				prevArrow: '<button class="slick__button slick__button--prev">\n' +
					'</button>',
				nextArrow: '<button class="slick__button slick__button--next">\n' +
					'</button>',
				mobileFirst: true,
				infinite: true,
				variableWidth: true,
				// centerMode: true,
				// centerPadding: '8px',
				// slidesToShow: 1,
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
						settings: 'unslick'
					}
				]
			});
		}
	};

	//слайдер картинок в карточке

	var productsImagesSlider = $('.product__gallery');

	var productsImagesSliderInit = function () {
		if(document.documentElement.clientWidth >= window.common.WINDOW_WIDTH.laptop ) {

			productsImagesSlider.slick({
				mobileFirst: true,
				arrows: false,
				dots: true,
				infinite: true,
				slidesToShow: 1,
				autoplay: false,
				autoplaySpeed: 1000,
				pauseOnHover: false,
				pauseOnFocus: false,
				pauseOnDotsHover: true
			});

			for (var i = 0; i < productsImagesSlider.length; i++) {
				productsImagesSlider[i].addEventListener('mouseover', function () {
					$(this).slick('slickPlay');
				});
				productsImagesSlider[i].addEventListener('mouseout', function () {
					$(this).slick('slickPause');
				});
			}
		}
	};

	// window.addEventListener('load', function (){
	// 	if (!catalogPageWrap) {
	// 		productsSliderInit();
	// 		productsImagesSliderInit();
	// 	}
	// });

	productsSliderInit();
	productsImagesSliderInit();

	//аккордеон меток в превью продукта
	var productMarksAccordion = function () {
		var productMarksToggle = $('.marks__arrow');
		var productMarksArrow = document.querySelectorAll('.marks__arrow--click');

		productMarksArrow.forEach(function (item) {
			item.addEventListener('click', function (evt) {
				evt.preventDefault();

				this.classList.toggle('active');
			})
		});

		window.common.activateAccordion(productMarksToggle);
	};

	productMarksAccordion();


	// СТРАНИЦА ТОВАРА
	var productCardColorItem = document.querySelectorAll('.product-card .colors__item');

	/*productCardColorItem.addEventListener()*/
	/*var changeActiveColor = function(){

	};*/

	/*$('.product-card__to-all-characteristics').click*/

	$('.product-card__slider').slick({
		mobileFirst: true,
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		asNavFor: '.product-card__slider-nav',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: false
				}
			}
		]
	});
	$('.product-card__slider-nav').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		vertical: true,
		draggable: false,
		asNavFor: '.product-card__slider',
		dots: false,
		infinite: false,
		focusOnSelect: true,
		arrows: true,
		prevArrow: '<button class="slick__button slick__button--prev">\n' +
			'</button>',
		nextArrow: '<button class="slick__button slick__button--next">\n' +
			'</button>',
	});

	//серия

	$('.series-card__slider').slick({
		mobileFirst: true,
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		asNavFor: '.series-card__slider-nav',
		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: false
				}
			}
		]
	});
	$('.series-card__slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		vertical: false,
		draggable: false,
		asNavFor: '.series-card__slider',
		dots: false,
		infinite: false,
		focusOnSelect: true,
		arrows: false,
	});

	$('.series-card__slider--not-nav').slick({
		mobileFirst: true,
		arrows: false,
		dots: true,
		infinite: false,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: false
				}
			}
		]
	});

	window.catalog = {
		catalogPageWrap: catalogPageWrap,
		productsSlider: productsSlider,
		productsImagesSlider: productsImagesSlider,
		productsImagesSliderInit: productsImagesSliderInit
	};
});
