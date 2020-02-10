$(document).on('mainPageLoaded', function () {

	var freeServices = document.querySelector('.free-services');
	var freeServicesTitle = document.querySelector('.free-services__title');
	var freeServicesToggle = $('.free-services__title');

	if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.tablet) {

		freeServices.classList.add('free-services--accordion')

		freeServicesTitle.addEventListener('click', function (evt) {
			evt.preventDefault();
			this.classList.toggle('active');
		});

		window.common.activateAccordion(freeServicesToggle);

	}
});
