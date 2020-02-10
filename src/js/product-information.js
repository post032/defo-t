$(document).on('mainPageLoaded', function () {

	var PRODUCTS_MIN = 10;
	var productCardAccordionToggle = $('.product-information__title:not(.no-toggle)');
	var productCardAccordionWrapper = document.querySelectorAll('.product-information:not(.no-toggle)');
	var productCardAccordionLinks = document.querySelectorAll('.product-information__title a');
	var body = document.querySelector('body');


	//кнопка "показать все"
	var productMoreInit = function (text, button, buttonText) {
		text.classList.add('js-more');
		button.classList.add('js-more');

		button.addEventListener('click', function (evt) {
			evt.preventDefault();

			text.classList.toggle('show-all');

			if (text.classList.contains('show-all')) {
				this.textContent = 'Свернуть';
			} else if (text.classList.contains('show-all') === false) {
				this.textContent = buttonText;
			}
		});
	};

	//функция аккордиона для карточки товара/серии

	var activateProductInfAccordion = function (wrapper, links, toggle) {
		wrapper.forEach(function (item) {
			item.classList.add('product-information--accordion')
		});

		links.forEach(function (item) {
			item.addEventListener('click', function (evt) {
				evt.preventDefault();

				this.classList.toggle('active');
			})
		});

		window.common.activateAccordion(toggle);
	};

	//активируем аккордион для экранах меньше таблетки
	if (body.classList.contains('catalog-element') && document.documentElement.clientWidth < window.common.WINDOW_WIDTH.tablet) {
		activateProductInfAccordion(productCardAccordionWrapper, productCardAccordionLinks, productCardAccordionToggle);
	}

	if (body.classList.contains('series-element')) {
		activateProductInfAccordion(productCardAccordionWrapper, productCardAccordionLinks, productCardAccordionToggle);
	}

	if (body.classList.contains('collection-element')) {
		activateProductInfAccordion(productCardAccordionWrapper, productCardAccordionLinks, productCardAccordionToggle);
	}


	//показать все характеристики
	var productCardCharacteristic = document.querySelector('.characteristics');
	var productCardCharacteristicMore = productCardCharacteristic.querySelector('.product-information__read-more');
	var productCardCharacteristicsList = productCardCharacteristic.querySelector('.characteristics-list');
	var productCardCharacteristicsItems = productCardCharacteristicsList.querySelectorAll('.product-information__dots-item');

	if (productCardCharacteristicsItems.length > PRODUCTS_MIN) {
		productMoreInit(productCardCharacteristicsList, productCardCharacteristicMore, 'Показать все');
	}

	//	показать все для описания
	if (body.classList.contains('catalog-element')) {
		var productDescriptionWrapper = document.querySelector('.product-information__description');
		var productDescriptionText = productDescriptionWrapper.querySelector('.product-information__text');
		var productDescriptionMore = productDescriptionWrapper.querySelector('.product-information__read-more');

		productMoreInit(productDescriptionText, productDescriptionMore, 'Читать полностью');
	}


	//слайдер модификаций
	var productModification = $('.product-information__modifications');

	productModification.slick({
		arrows: false,
		dots: false,
		mobileFirst: true,
		slidesToShow: 2,
		variableWidth: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					infinite: true,
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1279,
				settings: {
					slidesToShow: 4
				}
			}
		]
	});

	//слайдер преимуществ
	var productAdvantages = $('.product-information__advantages');

	productAdvantages .slick({
		arrows: false,
		dots: false,
		mobileFirst: true,
		slidesToShow: 2,
		variableWidth: true,
		infinite: true,
		responsive: [
			{
				breakpoint: 1279,
				settings: 'unslick'
			}
		]
	});

	$('.product-information__advantage-title').matchHeight();

});
