$(document).on('mainPageLoaded', function () {

	//change compare card view
	$(function () {
        $(window).scroll(function () {
        	if( ($(this).scrollTop() > 300 ) && ( document.documentElement.clientWidth > window.common.COMPARE_BRAKEPOINT.tablet)  ) {
                $('.compare-list').addClass('compressed');
                $('.compare-table').addClass('compressed');
            } else {
                $('.compare-list').removeClass('compressed');
                $('.compare-table').removeClass('compressed');
            }
        });
    });


	// compare params toogle visibility
	$('.compare-table__list .list__title').click(function(){
		$(this).parent().toggleClass('active');
	});


	// compare cards slider
	$('.compare-list .products__list').slick({
		arrows: false,
		dots: false,
		mobileFirst: true,
		infinite: false,
		variableWidth: true,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 320,
				infinite: false,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 960,
				infinite: false,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 1280,
				infinite: false,
				settings: {
					slidesToShow: 4
				}
			},{
				breakpoint: 1920,
				infinite: false,
				settings: {
					slidesToShow: 5
				}
			}

		]
	});

	// compare params slider
	$('.compare-table .list__row').slick({
		arrows: false,
		dots: false,
		mobileFirst: true,
		infinite: false,
		variableWidth: true,
		slidesToShow: 2,
		responsive: [
			{
				breakpoint: 320,
				infinite: false,
				settings: {
					slidesToShow: 2
				}
			},{
				breakpoint: 960,
				infinite: false,
				settings: {
					slidesToShow: 3
				}
			},{
				breakpoint: 1280,
				infinite: false,
				settings: {
					slidesToShow: 4
				}
			},{
				breakpoint: 1920,
				infinite: false,
				settings: {
					slidesToShow: 5
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
