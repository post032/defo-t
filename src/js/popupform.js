$(document).on('mainPageLoaded', function () {
	
	var scrollTopWindow = $(window).scrollTop();


	//FORM REPOSITION
	$('.popupform').css({
		'left' : $(window).width() * 0.5 - $('.popupform').width() * 0.5,
		'top' : scrollTopWindow + 100
	});


	//FORM REPOSITION
	$(window).resize(function(){
		$('.popupform').css({
			'left' : $(window).width() * 0.5 - $('.popupform').width() * 0.5,
			'top' : scrollTopWindow + 100
		});
	});


	//FORM CLOSE
	$('.popupform__close').click(function(){
		$('.popupform').removeClass('active');
		$('.overlay').removeClass('active');
	});


	//FORM SEND
	$('.popupform .button').click(function(e) {
		e.preventDefault();
		var name 		= $(".popupform input[name='name']").val();
		var phone 		= $(".popupform input[name='phone']").val();
		var eula 		= $(".popupform input.eula").is(':checked');
		var message 	= $(".popupform textarea").val();

		if( name.length < 1 ){
            $(".popupform input[name=name]").css({'border-color' : '#D33234'});
        } else {
            $(".popupform input[name=name]").css({'border-color' : '#F3F3F3'});
        }


        if( phone.length < 1 ){
            $(".popupform input[name=phone]").css({'border-color' : '#D33234'});
        } else {
            $(".popupform input[name=phone]").css({'border-color' : '#F3F3F3'});
        }



		var dataString = 'name=' + name + '&phone=' + phone + '&message=' + message;

		//send
		if ( (name.length > 0) && (phone.length > 0) && (eula == true)   )  {
		    $.ajax({
		        type: "POST",
		        url: "send.php",
		        data: dataString,
		        success: function() {
		        	//what should we do?
		        },
		        error: function(){
		        	//what should we do?
		        }
		    });
		}
		return false;
	});
	
});
