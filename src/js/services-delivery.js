$(document).on('mainPageLoaded', function () {


	// tab switch click
	$('.service-delivery__switch--item').click(function(){
		var id = $(this).attr('data-id');
		$('.service-delivery__switch--item').removeClass('active');
		$(this).addClass('active');

		$('.service-delivery__block').removeClass('active');
		$('#'+id).addClass('active');
	});

	if ( ($(window).width() < 768 ) || (($(window).width() > 1280) && ($(window).width() < 1920)) ) {
		$('.table--block__header .title').removeClass('active');
		$('.table--block__header[data-switch-key="msk"] .title').addClass('active');
		$('.table .table--block[data-key="obl"]').hide();
	} else {
		$('.table--block__header .title').removeClass('active');
		$('.table .table--block[data-key="obl"]').show();
	}

	$(window).resize(function(){
		if ( ($(window).width() < 768 ) || (($(window).width() > 1280) && ($(window).width() < 1920)) ) {
			$('.table--block__header .title').removeClass('active');
			$('.table--block__header[data-switch-key="msk"] .title').addClass('active');
			$('.table .table--block[data-key="obl"]').hide();
		} else {
			$('.table--block__header .title').removeClass('active');
			$('.table .table--block[data-key="obl"]').show();
		}
	});


	//CLICK
	if ( ($(window).width() < 768 ) || (($(window).width() > 1280) && ($(window).width() < 1920)) ) {
		$('.table--block__header .title').click(function(){
			var key = $(this).parent().attr('data-switch-key');

			$('.table--block__header .title').removeClass('active');
			$('.table--block__header[data-switch-key="'+key+'"] .title').addClass('active');

			$('.table--block[data-key]').hide();
			$('.table--block[data-key="'+key+'"]').show();
			console.log(key);
		});
	}


});
