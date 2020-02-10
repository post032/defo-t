$('.comments__toggle').click(function(e) {
	e.preventDefault();
	if (!$(this).data('status')) {
		$(this).html('Показать комментарии: 2');
		$(this).data('status', true);
		$('.comments__box--scroll-size').addClass('comments__box--none');
	} else {
		$(this).html('Скрыть комментарии: 2');
		$(this).data('status', false);
		$('.comments__box--scroll-size').removeClass('comments__box--none');
	}
});

$('.comment__open').click(function(e) {
  e.preventDefault();
  $('.comments-add').addClass('comments-add__show');
})

$('.close').click(function(e) {
  e.preventDefault();
  $('.comments-add').removeClass('comments-add__show');
})


$('.comments__button-answer').click(function(e) {
  e.preventDefault();
  var one = $('.comments__text').html(),
  two = $('.comments-answer__text').html();
  $('.comments-answer__text').html(one);
  $('.comments-answer').addClass('comments-answer__show');
})

$('.close').click(function(e) {
  e.preventDefault();
  $('.comments-answer').removeClass('comments-answer__show');
})
