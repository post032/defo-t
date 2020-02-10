$(document).on('mainPageLoaded', function () {
	var consultationButton = document.querySelector('.consultation-btn--call-form');
	var consultationForm = document.querySelector('.form--float');
	var consultationFormClose = consultationForm.querySelector('.basket-popup__close');
	var overlay = document.querySelector('.overlay');
	// overlay.addEventListener('click', closeFastViewPopup);

		if(document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop ) {
			consultationButton.addEventListener('click', function (evt) {
				evt.preventDefault();

				consultationForm.classList.add('active');
				overlay.classList.add('active');
			});

			consultationFormClose.addEventListener('click', function () {
				consultationForm.classList.remove('active');
				overlay.classList.remove('active');
			});
		}
});
