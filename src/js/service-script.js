$(document).on('mainPageLoaded', function () {


//design__service
	var handleMatchMedia = function (mediaQuery) {
			$("ul.design__service--list").removeClass("design__service--list__active");
			$("ul.design__service--list li").removeClass("active");
			$("ul.design__service--list li:first").addClass("active");

			if (mediaQuery.matches) {
				$("ul.design__service--list li").click(function () {
					var parent = $(this);
					if ($(parent).hasClass("active")) {
						$(".design__service--list").addClass("design__service--list__active");
						$(parent).removeClass("active");
					} else {
						$(parent).addClass("active");
						$(parent).parent().removeClass("design__service--list__active");
						return false;
					}
				});
			} else {
				$("ul.design__service--list li").click(function () {
					$("ul.design__service--list li").removeClass("active");
					$(this).addClass("active");
					return false;
				});
			}
		},
		mql = window.matchMedia('all and (max-width: 1280px)');
	handleMatchMedia(mql);
	mql.addListener(handleMatchMedia);

	//pop-up

	var viewportWidth = window.innerWidth;
	if (viewportWidth < 769) {
		$('.design__top--btn').click(function () {
			$('.form__content').show().parent().addClass('form--consult-show');
			return false;
		});
		$('.form__close-sm').click(function () {
			$('.form__content').hide().parent().removeClass('form--consult-show');
			return false;
		});

		$(document).mouseup(function (e) {
			var container = $(".form--consult-show .form__content");
			if (container.has(e.target).length === 0) {
				container.hide().parent().removeClass('form--consult-show');
			}
		});
	}

//stop form before footer
	var topPos = $('.form__content').offset().top;
	$(window).scroll(function () {
		var top = $(document).scrollTop(),
			pip = $('.footer').offset().top,
			heightFooter = $('.footer').height() + 50,
			height = $('.form__content').outerHeight();
		if (top > topPos && top < pip - height) {
			$('.form__content').removeAttr("style");
		} else if (top > pip - height) {
			$('.form__content').css({'top': 'auto', 'bottom': heightFooter});
		}
	});
});
