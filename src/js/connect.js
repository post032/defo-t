$('.question__open').click(function(e) {
  e.preventDefault();
  $('.question').addClass('question__show');
})

$('.close').click(function(e) {
  e.preventDefault();
  $('.question').removeClass('question__show');
})
