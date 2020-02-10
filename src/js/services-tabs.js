$(document).on('mainPageLoaded', function () {
	$('.services-tabs__tabs-list').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.services-tabs').find('.services-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});
