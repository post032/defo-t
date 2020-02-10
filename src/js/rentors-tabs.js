$(document).on('mainPageLoaded', function () {
	$('.rentors-tabs__tabs-list').on('click', 'li:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('.rentors-tabs').find('.rentors-tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});
});
