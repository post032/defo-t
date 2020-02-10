$(document).on('mainPageLoaded', function () {
	
	if ( $(window).width() <= 568 ) {
		$('.about .hr').after( $('.project__card .image') );
	} else {
		$('.about').after( $('.project__card .about .image') );
	}
		
	$(window).resize(function(){
		if ( $(window).width() <= 568 ) {
			$('.about .hr').after( $('.project__card .image') );
		} else {
			$('.about').after( $('.project__card .about .image') );
		}
	});

});
