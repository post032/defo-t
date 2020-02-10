$(document).on('mainPageLoaded', function () {
	$('.phone-toggle').click(function () {
		$(this).toggleClass('active');
		$('.phone-dropdown').fadeToggle().toggleClass('active');
	});

});
