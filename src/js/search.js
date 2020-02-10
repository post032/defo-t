$(document).on('mainPageLoaded', function () {
	// фильтр поиска в шапке
	$('.filter-chooser').click(function () {
		$('.filter-dropdown').slideToggle();
	});

	$('.filter-dropdown span').click(function () {
		$('.filter-dropdown').slideUp();

		if ($('.filter-chooser .item').attr('data-val') !== $(this).attr('data-val')) {
			//присваиваем класс активного элемента
			$('.filter-dropdown span').not(this).removeClass('active');
			$(this).addClass('active');
			// передаем значение кликнутого элемента в контейнер
			$('.filter-chooser .item').attr('data-val', $(this).attr('data-val')).html($(this).html());
		}

	});
});
