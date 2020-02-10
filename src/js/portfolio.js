$(document).on('mainPageLoaded', function () {


	$('.portfolio').slick({
		arrows: false,
		dots: false,
		mobileFirst: true,
		infinite: false,
		variableWidth: true,
		slidesToShow: 1,
		responsive: [
			{
				breakpoint: 320,
				infinite: false,
				settings: {
					variableWidth: false,
					slidesToShow: 1
				}
			},{
				breakpoint: 375,
				infinite: false,
				settings: {
					variableWidth: false,
					slidesToShow: 1
				}
			},{
				breakpoint: 414,
				infinite: false,
				settings: {
					variableWidth: false,
					slidesToShow: 1
				}
			},{
				breakpoint: 568,
				infinite: false,
				settings: {
					variableWidth: false,
					slidesToShow: 2
				}
			},{
				breakpoint: 768,
				settings: "unslick" // destroys slick
			}

		]
	});

	// compare params slider
	$('.compare-table .list__row').slick({
		arrows: false,
		dots: false,
		mobileFirst: false,
		infinite: false,
		variableWidth: true,
		slidesToShow: 5,
		responsive: [
			{
				breakpoint: 1920,
				infinite: false,
				settings: {
					variableWidth: true,
					slidesToShow: 5
				}
			},

			{
				breakpoint: 1280,
				infinite: false,
				settings: {
					variableWidth: true,
					slidesToShow: 4
				}
			},

			{
				breakpoint: 960,
				infinite: false,
				settings: {
					variableWidth: true,
					slidesToShow: 3
				}
			},

			{
				breakpoint: 768,
				infinite: false,
				settings: {
					variableWidth: true,
					slidesToShow: 2
				}
			}

		]
	});


	//slick next button click
	$('.compare-arrows .right').click(function(){
		var indexVal = $('.compare-list .products__list').slick('slickCurrentSlide');
		$('.compare-list .products__list').slick('slickGoTo',indexVal+1);
		$('.compare-table .list__row').slick('slickGoTo',indexVal+1);

	});

	//slick prew button click
	$('.compare-arrows .left').click(function(){
		var indexVal = $('.compare-list .products__list').slick('slickCurrentSlide');
		$('.compare-list .products__list').slick('slickGoTo',indexVal-1);
		$('.compare-table .list__row').slick('slickGoTo',indexVal-1);
	});

	// On swipe products event
	$('.compare-list .products__list').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.compare-table .list__row').slick('slickGoTo',nextSlide);
	});

	// On swipe table event
	$('.compare-table .list__row').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.compare-list .products__list').slick('slickGoTo',nextSlide);
	});


});
