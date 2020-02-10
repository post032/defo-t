$(document).on('mainPageLoaded', function () {
	var MENU_WIDTH = {
		zeroLevel: 296,
		firstLevel: 592,
		secondLevel: 888
	};

	if (!$('.main-page').length) {
		$('.product-menu').addClass('not-main-page');
	}

	// меню каталога
	$('.header .burger').click(function () {
		$('.product-menu').fadeToggle();
		// проверка на ширину экрана
		if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop) {
			$('.page-menu').fadeOut();
		}
	});

	// постраничное меню в планшетке
	$('.header .page-menu__toggle').click(function () {
		// проверка на ширину экрана
		if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop && document.documentElement.clientWidth >= window.common.WINDOW_WIDTH.tablet) {
			$(this).toggleClass('active');
			$('.product-menu').fadeOut();
			$('.page-menu').fadeToggle();
		}
	});

	//фиксация меню при скролле

	$(window).scroll(function () {
		if ($('.main-page').length || $('.catalog-element').length)  {
			var $headerHeight = $('.header').outerHeight();

			// на мобилке
			if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.tablet) {


				if ($(window).scrollTop() > $headerHeight) {
					$('.header__wrapper_bottom').addClass('fixed');

				}
				else {
					$('.header__wrapper_bottom').removeClass('fixed');
				}
			}

			// на дэсктопе
			if (document.documentElement.clientWidth > window.common.WINDOW_WIDTH.tablet && $('.main-page').length) {


				if ($(window).scrollTop() > $headerHeight) {
					$('.header__wrapper').addClass('fixed');

				}
				else {
					$('.header__wrapper').removeClass('fixed');
				}
			}
		}

	});

	// МЕНЮ В ДЕСКТОПЕ
	var menu = $('.header .product-menu');
	var menuZeroLevLi = menu.find('.product-menu__item');
	var menuZeroLevLink = menu.find('.product-menu__item_link');
	var menuFirstLevLi = menu.find('.js-first-lev').children('.dropdown-menu__item');
	var menuFirstLevLink = menuFirstLevLi.find('.dropdown-menu__item-link');
	var menuProductList = menu.find('.product-menu__list');
	var menuProductItem = menu.find('.product-menu__item');

	if (document.documentElement.clientWidth > window.common.WINDOW_WIDTH.laptop) {
		menuProductList.hover(
			function () {
				// показываем overlay
				$('.overlay').addClass('visible');
				
				console.log(menuProductList.length);

				//menu.height( menuProductItem.length * menuProductItem.height() + menuProductItem.length );
				menuProductList.height( menuProductItem.length * menuProductItem.height() + menuProductItem.length );
				// добавляем класс меню, чтобы изменить стили
				/*$(this).addClass('white-menu-hover');*/

				// наведение на элементы меню НУЛЕВОГО уровня
				menuZeroLevLi.hover(
					function () {

						if ($(this).find('.js-first-lev').length) {
							menu.width(MENU_WIDTH.firstLevel);
							$(this).find('.js-first-lev').show();
							menuZeroLevLi.not(this).find('.js-first-lev').hide();
						} else {
							menu.width(MENU_WIDTH.zeroLevel);
							$('.js-first-lev').hide();
						}
					}
				);

				// наведение на элементы выпадающего меню ПЕРВОГО уровня
				menuFirstLevLi.hover(
					function () {
						if ($(this).find('.js-second-lev').length) {
							menu.width(MENU_WIDTH.secondLevel);
							$(this).find('.js-second-lev').show();
							menuFirstLevLi.not(this).find('.js-second-lev').hide();
						} else {
							menu.width(MENU_WIDTH.firstLevel);
							$('.js-second-lev').hide();
						}
					}
				)

			},
			function () {
				// скрываем overlay
				$('.overlay').removeClass('visible');

				// убираем класс меню, чтобы изменить стили
				/*$(this).removeClass('white-menu-hover');*/

				$('.dropdown-menu').hide();
				menu.width(MENU_WIDTH.zeroLevel);
			}
		);
	};


	// МЕНЮ В МОБИЛКЕ
	if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop) {

		// открытие подменю ПЕРВОГО уровня
		menuZeroLevLink.click(function (evt) {
			if ($(this).siblings('.dropdown-menu').length) {
				evt.preventDefault();
				// показываем хлебные крошки
				$('.breadcrumbs--menu').show();

				menuZeroLevLink.not(this).siblings('.dropdown-menu').hide();
				$(this).siblings('.dropdown-menu').show();
				menuProductList.addClass('visible-first-level');
			}
		});


		//открытие подменю ВТОРОГО уровня
		menuFirstLevLink.click(function (evt) {
			if ($(this).siblings('.dropdown-menu').length) {
				evt.preventDefault();

				menuFirstLevLink.not(this).siblings('.dropdown-menu').hide();
				$(this).siblings('.dropdown-menu').show();
				menuProductList.removeClass('visible-first-level');
				menuProductList.addClass('visible-second-level');
			}
		});

		// клик по хлебным крошкам в меню
		$('.breadcrumbs--menu .breadcrumbs__item.back').click(function (evt) {
			evt.preventDefault();

			if ($('.breadcrumbs--menu').attr("style") && menuProductList.hasClass('visible-first-level')) {
				menuProductList.removeClass('visible-first-level');
			}

			else if ($('.breadcrumbs--menu').attr("style") && menuProductList.hasClass('visible-second-level')) {
				menuProductList.removeClass('visible-second-level').addClass('visible-first-level');
			}

			// проверка на уровень вложенности для показа хлебных крошек
			if (!menuProductList.hasClass('visible-first-level') && !menuProductList.hasClass('visible-second-level')) {
				$('.breadcrumbs--menu').hide();
			}
		});

	}





	/*

	// наведение на элементы выпадающего меню ПЕРВОГО уровня
	menuFirstLevLi.hover(
		function () {
			if ($(this).find('.dropdown-menu__second').length) {
				menuDesktop.width(MENU_WIDTH.secondLevel);
			} else {
				menuDesktop.width(MENU_WIDTH.firstLevel);
			}
		},
		function () {
			menuDesktop.width(MENU_WIDTH.firstLevel);
		});*/

});
