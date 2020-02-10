$(document).on('mainPageLoaded', function () {

var colorsButton = document.querySelectorAll('.colors__item');


colorsButton.forEach(function (btn) {
	btn.addEventListener('click', function (evt) {
		evt.preventDefault();

		colorsButton.forEach(function (item) {
			item.classList.remove('active');
		});

		this.classList.add('active');
	})
});



});
