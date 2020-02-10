$(document).on('mainPageLoaded', function () {
	
	
	//FORM SHOW PASS
	$('.auth-reg .eye').click(function(){
		if ( $(this).parent().children('input[type="password"]').length != 0 ) {
			$(this).parent().children('input[type="password"]').attr('type', 'text');
			$(this).addClass('active');
		} else {
			$(this).parent().children('input[type="text"]').attr('type', 'password');
			$(this).removeClass('active');
		}
	});

	$('.auth-reg .switch-tab').click(function(){
		id = $(this).attr('data-id');
		$('.auth-reg .switch-tab').removeClass('active');
		$(this).addClass('active');

		$('.auth-reg .auth-reg__content').removeClass('active');
		$('#'+id ).addClass('active');
	});
});
