$(document).on('mainPageLoaded', function () {

	$(".js-range-slider").ionRangeSlider({
		type: "double",
		hide_from_to: true
	});


	// аккордеон
	$('.sidebar-filter__block-title').click(function () {
		$(this).next().slideToggle();
		$(this).toggleClass('active');
	});

});
