$(document).on('mainPageLoaded', function () {
//аккордеон футер
	if (document.documentElement.clientWidth < window.common.WINDOW_WIDTH.laptop) {
		var footerToggle = $('.footer__title:not(.no-toggle)');
		var footerListWrapper = document.querySelectorAll('.footer__list-wrapper');
		var footerLinks = document.querySelectorAll('.footer__link--title:not(.no-toggle)');

		footerListWrapper.forEach(function (item) {
			item.classList.add('footer--accordion')
		});

		footerLinks.forEach(function (item) {
			item.addEventListener('click', function (evt) {
				evt.preventDefault();

				this.classList.toggle('active');
			})
		});

		window.common.activateAccordion(footerToggle);
	}
});
