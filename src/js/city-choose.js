$(document).on('mainPageLoaded', function () {

	// попап городов
	$('.city-choose, .map-mark, .city-popup-current .no').click(function () {
		$('.city-popup').addClass('active');
	});
	$('.city-popup__close').click(function () {
		$('.city-popup').removeClass('active');
	});

	$('.city-popup-current .yes, .city-popup-current .no').click(function () {
		$('.city-popup-current').removeClass('active')
	});

	//попап ВАШ ГОРОД?
	function showPopup() {
		clearTimeout();
		$('.city-popup-current').addClass('active')
	};

	//РАСКОМЕНТИРОВАТЬ ПРИ РАЗРАБОТКЕ
	if ($('.main-page').length) {
		setTimeout(showPopup, 2000);
	};

});
