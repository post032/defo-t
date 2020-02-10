$(document).on('mainPageLoaded', function () {
// слайдер новостей
	$('.news__wrapper').slick({
		arrows: false,
		dots: false,
		prevArrow: '<button class="slick__button slick__button--prev">\n' +
			'</button>',
		nextArrow: '<button class="slick__button slick__button--next">\n' +
			'</button>',
		mobileFirst: true,
		infinite: true,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 1279,
				settings: {
					arrows: true,
					variableWidth: false,
					slidesToShow: 3,
					infinite: true
				}
			}
		]
	});

	if ( $(window).width() >= 768 ){
		$('.news-detail__wrap__images').slick({
			arrows: false,
			dots: false,
			mobileFirst: true,
			infinite: true,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						infinite: true
					}
				},{
					breakpoint: 1920,
					settings: 'unslick'
				}
			]
		});
	}

	$('.think__icons .icon').click(function(){
		$('.think__icons .icon').removeClass('active');
		$(this).addClass('active');
	});

	$('.think__buttons .add-comment').click(function() {
		$('#add-comment').slideToggle('slow');
	});

	$('.think__buttons .make-question').click(function() {
		$('#make-question').slideToggle('slow');
	});


	//одинаковая высота новостей
	$('.news__text').matchHeight();
});


jQuery('.comment-block__links--btn-show').click(function() {
	$this = jQuery(this);
	$this.next('.comment-block__hidden').slideToggle('slow');
});

jQuery('.comment-block__links--btn-respond').click(function() {
	$this = jQuery(this);
	$this.parent().parent().find('.comment-block__form').show();
});
jQuery('.comment-block__form--close').click(function() {
	jQuery('.comment-block__form').hide();
});
