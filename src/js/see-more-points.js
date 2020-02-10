$(document).on('mainPageLoaded', function () {
	$('.see-more-points .see-more-points__icons').click(function () {
		$(this).toggleClass('active').next().toggleClass('active');
		$('.see-more-points .see-more-points__icons').not(this).removeClass('active').next().removeClass('active');

	});

});
