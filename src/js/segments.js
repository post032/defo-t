$(document).on('mainPageLoaded', function () {
// открытие сегментов в мобилке
	$('.segments-select .segments-current').click(function () {
		$('.segments-other').fadeToggle();
	});
	$('.segments-select .segments-other a').click(function () {
		$('.segments-other').fadeOut();
	});
});
