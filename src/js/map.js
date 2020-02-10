$(document).on('mainPageLoaded', function () {
// блок с картой

	//аккордеон карта
	var mapToggle = $('.map__item .item-name');

	window.common.activateAccordion(mapToggle);


// клик по кнопкам
	var clickMapBtns = function (evt) {
		var target = evt.target;

		$('.map-btn').removeClass('active');

		if (target.classList.contains('map-btn')) {
			target.classList.add('active');
		}

		var btnId = target.getAttribute('id');

		switch (btnId) {
			case 'map-btn--address':
				$('.map-block').removeClass('active');
				$('.address-block').removeClass('hidden');
				break;

			case 'map-btn--map':
				$('.map-block').addClass('active');
				$('.address-block').addClass('hidden');
				break;
		}
	};

	$(window).resize(function () {
		if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop) {
			document.querySelector('.map-btns').addEventListener('click', clickMapBtns);
		} else {
			$('.map-block').removeClass('active');
		}
		;
	});

	if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop) {
		document.querySelector('.map-btns').addEventListener('click', clickMapBtns);
	} else {
		$('.map-block').removeClass('active');
	}

	var chekSearchMapLength = function (item) {
		if (item.value.length === 0) {
			$('.address-block').fadeOut();
		}

	};

	if (document.documentElement.clientWidth >= window.common.WINDOW_WIDTH.laptop && $('.main-page').length) {
		// открытие адресов при вводе в поиск
		var mapInputSearch = document.querySelector('.map__search-input');
		mapInputSearch.addEventListener('input', function () {
			$('.address-block').fadeIn();
			chekSearchMapLength(mapInputSearch);
		});
	}


	// Дождёмся загрузки API и готовности DOM.
	ymaps.ready(init);

	var myMap;

	function init () {
		// Создание экземпляра карты и его привязка к контейнеру с
		// заданным id ("map").
		myMap = new ymaps.Map('map', {
			// При инициализации карты обязательно нужно указать
			// её центр и коэффициент масштабирования.
			center: [55.76, 37.64], // Москва
			zoom: 10
		}, {
			searchControlProvider: 'yandex#search'
		});

	}

});
