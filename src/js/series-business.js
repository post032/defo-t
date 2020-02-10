$(document).on('mainPageLoaded', function () {

	$('.colors-info__list .item').click(function(){
		$(this).parent().children('li.item').removeClass('active');
		$(this).addClass('active');
	});


	var ImagesSlider = $('.series-business__slider');

	var seriesImagesSlider = function () {

		ImagesSlider.slick({
			mobileFirst: true,
			arrows: false,
			dots: true,
			infinite: true,
			slidesToShow: 1,
			autoplay: false,
			autoplaySpeed: 1000,
			pauseOnHover: false,
			pauseOnFocus: false,
			pauseOnDotsHover: true
		});

		for (var i = 0; i < ImagesSlider.length; i++) {
			ImagesSlider[i].addEventListener('mouseover', function () {
				$(this).slick('slickPlay');
			});
			ImagesSlider[i].addEventListener('mouseout', function () {
				$(this).slick('slickPause');
			});
		}
	};

	seriesImagesSlider();

});
