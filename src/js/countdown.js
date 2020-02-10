function countDown() {
	$('.countdown__elements').each(function(){

		var countDownDate = new Date($(this).attr('data-deadline')).getTime();
		var element = $(this);
		
		var x = setInterval(function() {
		  var now = new Date().getTime();
		  var distance = countDownDate - now;
		  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		  // Display the result
		  element.children('.days').children('.element__digit').html(days);
		  element.children('.hours').children('.element__digit').html(hours);
		  element.children('.minutes').children('.element__digit').html(minutes);
		  element.children('.seconds').children('.element__digit').html(seconds);

		  // If the count down is finished, write some text 
		  if (distance < 0) {
		    clearInterval(x);
		   	element.remove();
		  }
		}, 1000);

	});
}

$(document).ready(function() {

	countDown();

});
