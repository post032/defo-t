$(document).on('mainPageLoaded', function () {


	// tabClick
	$('.faq-list__element .line-header').click(function(){
		$(this).parent().toggleClass('active');
	});


});
