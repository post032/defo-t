$(document).on('mainPageLoaded', function () {
	var TIMEOUT = 10000;

	var productBuyButtons = document.querySelectorAll('.product__buy');
	var basketPopup = document.querySelector('.basket-popup');
	var basketPopupTitle = basketPopup.querySelector('.basket-popup__title');
	var basketClose = basketPopup.querySelector('.basket-popup__close');
	var basketContinue = basketPopup.querySelector('.basket-popup__button--continue');

	var showBasketPopup = function () {
		basketPopup.classList.add('show');
		document.addEventListener('keydown', onBasketEscapePress);
	};

	var closeBasketPopup = function () {
		basketPopup.classList.remove('show');
		document.removeEventListener('keydown', onBasketEscapePress);
	};

	var onCloseButtonClick = function (evt) {
		evt.preventDefault();
		closeBasketPopup();
	};

	var onBasketEscapePress = function (evt) {
		window.common.isEscapeEvent(evt, closeBasketPopup);
	};

	if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop) {
		basketPopupTitle.textContent = 'Товар добавлен в корзину';
		setTimeout(closeBasketPopup, TIMEOUT);
	}

	if (document.documentElement.clientWidth >= window.common.WINDOW_WIDTH.laptop) {
		basketPopupTitle.textContent = 'Корзина';
	}

	productBuyButtons.forEach(function (item) {
		item.addEventListener('click', function (evt) {
			evt.preventDefault();

			showBasketPopup();
		})
	});


	basketClose.addEventListener('click', onCloseButtonClick);
	basketContinue.addEventListener('click', onCloseButtonClick);

	$(window).scroll(function() {

		if($(this).scrollTop() >= 100) {

			$('#basketSticky').removeClass('absolute');

		} else {

			$('#basketSticky').addClass('absolute');
		}

	});
});
