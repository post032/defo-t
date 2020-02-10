$(document).on('mainPageLoaded', function () {

	$('.gallery-thumbs .thumbs-list li').click(function(){
		var index = $(this).index() + 1;
		
		$('.gallery-thumbs .thumbs-list li').removeClass('active');
		$(this).addClass('active');

		$('ul.gallery-list li.gallery-list__item').removeClass('active');
		$('ul.gallery-list li.gallery-list__item:nth-child('+index+')').addClass('active');
	});

});
