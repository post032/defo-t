$(document).on('mainPageLoaded', function () {
	$(window).scroll(function () {


		if ($('.catalog-element').length)  {

			// фиксация блока с ценой
			var priceOffsetTopMobile = $('.buy-buttons--mobile').offset().top - $(window).scrollTop();
			var priceOffsetTopDesktop = $('.product-card__header-for-fixed').offset().top;
			var priceHeightDesktop = $('.product-card__header').outerHeight();

			// на мобилке
			if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.tablet) {

				if (priceOffsetTopMobile < 0) {
					$('.buy-buttons-fixed').addClass('show');
				} else {
					$('.buy-buttons-fixed').removeClass('show');
				}
			};

			// на дэсктопе
			if (document.documentElement.clientWidth >= window.common.WINDOW_WIDTH.tablet) {
				if (priceOffsetTopDesktop - $(window).scrollTop() < 0) {
					$('.product-card__header').addClass('fixed');

				} else {
					$('.product-card__header').removeClass('fixed');
				}
			}

		}
	});

});
