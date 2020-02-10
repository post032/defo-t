$(document).on('mainPageLoaded', function () {
// кнопки под первым блоком
	$('.product-kind-btns .product-kind-btns__item').click(function () {
		$(this).toggleClass('active');
	});
});
