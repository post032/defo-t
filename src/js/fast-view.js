$(document).on('mainPageLoaded', function () {

	var fastViewPopup = document.querySelector('.fast-view-popup');
	var fastViewImagesSlider = $('.product__gallery--fast-view-popup');
	var fastViewButtons = document.querySelectorAll('.product__fast-view');
	var overlay = document.querySelector('.overlay');

	var fastViewImagesSliderInit = function () {

		fastViewImagesSlider.slick({
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

		for (var i = 0; i < fastViewImagesSlider.length; i++) {
			fastViewImagesSlider[i].addEventListener('mouseover', function () {
				$(this).slick('slickPlay');
			});
			fastViewImagesSlider[i].addEventListener('mouseout', function () {
				$(this).slick('slickPause');
			});
		}
	};

	var showFastViewPopup = function () {
		fastViewPopup.classList.add('active');
		overlay.classList.add('active');
		fastViewImagesSliderInit();

		document.addEventListener('keydown', onFastViewEscapePress);
	};

	var closeFastViewPopup = function () {
		fastViewPopup.classList.remove('active');
		overlay.classList.remove('active');
		window.common.killSlick(fastViewImagesSlider);
		document.removeEventListener('keydown', onFastViewEscapePress);
	};

	var onFastViewEscapePress = function (evt) {
		window.common.isEscapeEvent(evt, closeFastViewPopup);
	};

	fastViewButtons.forEach(function (btn) {
		btn.addEventListener('click', function (evt) {
			evt.preventDefault();

			showFastViewPopup();
		});
	});

	overlay.addEventListener('click', closeFastViewPopup);
});




