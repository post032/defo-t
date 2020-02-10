$(document).on('mainPageLoaded', function () {

	var catalogProductsSlider = $('.catalog-page__products');

	var catalogProductsSliderInit = function () {
		catalogProductsSlider.slick({
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
					settings: 'unslick'
				}
			]
		});
	};

	catalogProductsSliderInit();
    if(typeof window.catalog == "undefined") {
		window.catalog = {
			catalogPageWrap: document.querySelector('.catalog-page__wrapper')
		}
	}

	var viewButtons = window.catalog.catalogPageWrap.querySelectorAll('.type__button');

	var listView = window.catalog.catalogPageWrap.querySelector('.type__button--list');
	var gridView = window.catalog.catalogPageWrap.querySelector('.type__button--grid');
	var strokeView = window.catalog.catalogPageWrap.querySelector('.type__button--stroke');

	//ПЕРЕКЛЮЧЕНИЕ ВИДА

	var productToggleView = window.catalog.catalogPageWrap.querySelectorAll('.product--toggle-view');
	var catalogProductsSliderList = document.querySelectorAll('.catalog-page__products');

	var isSlick = true;

	var checkSlickKill = function () {
		catalogProductsSliderList.forEach(function (slider) {
			if (slider.classList.contains('slick-slider') && isSlick === true) {
				window.common.killSlick(catalogProductsSlider);

				isSlick = false;
			}
		});
	};

	var checkSlickLive = function () {
		catalogProductsSliderList.forEach(function (slider) {
			if (!slider.classList.contains('slick-slider') && isSlick === false) {
				catalogProductsSliderInit();

				isSlick = true;
			}
		});
	};

	var productsViewInitialize = function (view) {
		productToggleView.forEach(function (item) {
			item.classList.add(view)
		});
	};

	var productsViewKill = function (view) {
		productToggleView.forEach(function (item) {
			item.classList.remove(view)
		});
	};

	viewButtons.forEach(function (item) {
		item.addEventListener('click', function (evt) {
			evt.preventDefault();

			viewButtons.forEach(function (btn) {
				btn.classList.remove('active');
			});

			this.classList.add('active');

			if (this === listView) {
				productsViewKill('stroke');
				productsViewInitialize('list');

				if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.desktop) {
					checkSlickKill();
				}
			}
			if (this === gridView) {
				productsViewKill('stroke');
				productsViewKill('list');

				if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.desktop) {
					checkSlickLive();
				}
			}
			if (this === strokeView) {
				productsViewKill('list');
				productsViewInitialize('stroke');

				if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.desktop) {
					checkSlickKill();
				}
			}
		});
	});

});
