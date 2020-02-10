jQuery(document).ready(function ($) {
	$(".comment-block__links--btn-show").click(function () {
		$(this).parent().next(".comment-block__hidden").toggleClass("comment-block__hidden--show");
	});
});
