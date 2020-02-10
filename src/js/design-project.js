$(document).on('mainPageLoaded', function () {
//design__slider
	var active = false;
	var scrollerMiddle = document.querySelector('.design__slider--scroller-middle');
	var scrollerTop = document.querySelector('.design__slider--scroller-top');

	scrollerMiddle.addEventListener('mousedown', function () {
		active = "design__slider--img-middle";
		scrollerMiddle.classList.add('scrolling');
	});
	document.body.addEventListener('mouseup', function () {
		active = false;
		scrollerMiddle.classList.remove('scrolling');
	});
	document.body.addEventListener('mouseleave', function () {
		active = false;
		scrollerMiddle.classList.remove('scrolling');
	});
	scrollerTop.addEventListener('mousedown', function () {
		active = "design__slider--img-top";
		scrollerTop.classList.add('scrolling');
	});
	document.body.addEventListener('mouseup', function () {
		active = false;
		scrollerTop.classList.remove('scrolling');
	});
	document.body.addEventListener('mouseleave', function () {
		active = false;
		scrollerTop.classList.remove('scrolling');
	});

	document.body.addEventListener('mousemove', function (e) {
		if (!active) return;
		var x = e.pageX;
		x -= document.querySelector('.design__slider--wrap').getBoundingClientRect().left;
		scrollIt(x);
	});

	function scrollIt(x) {
		var transform = Math.max(0, (Math.min(x, document.querySelector('.design__slider--wrap').offsetWidth)));
		// if we're dragging the middle slider
		if (active === "design__slider--img-middle") {
			document.querySelector('.design__slider--img-middle').style.width = transform + "px";
			scrollerMiddle.style.left = transform - 25 + "px";
			// if we're using scroller-middle, middle must always be to the right of top
			if (scrollerTop.getBoundingClientRect().left > scrollerMiddle.getBoundingClientRect().left - 5) {
				document.querySelector('.design__slider--img-top').style.width = transform - 5 + "px";
				scrollerTop.style.left = transform - 30 + "px";
			}
		}
		// if we're dragging the top slider
		if (active === "design__slider--img-top") {
			document.querySelector('.design__slider--img-top').style.width = transform + "px";
			scrollerTop.style.left = transform - 25 + "px";
			// if we're using scroller-top, top must always be to the left
			if (scrollerTop.getBoundingClientRect().left > scrollerMiddle.getBoundingClientRect().left - 5) {
				document.querySelector('.design__slider--img-middle').style.width = transform + 5 + "px";
				scrollerMiddle.style.left = transform - 20 + "px";
			}
		}
	}

	// Let's set our opening state based off the width,
	// we want to show a bit of both images so the user can see what's going on
	active = "design__slider--img-middle";
	scrollIt(360);
	active = "design__slider--img-top";
	scrollIt(130);
	active = false;

	scrollerMiddle.addEventListener('touchstart', function () {
		active = "design__slider--img-middle";
		scrollerMiddle.classList.add('scrolling');
	});
	document.body.addEventListener('touchend', function () {
		active = false;
		scrollerMiddle.classList.remove('scrolling');
	});
	document.body.addEventListener('touchcancel', function () {
		active = false;
		scrollerMiddle.classList.remove('scrolling');
	});

	scrollerTop.addEventListener('touchstart', function () {
		active = "design__slider--img-top";
		scrollerTop.classList.add('scrolling');
	});
	document.body.addEventListener('touchend', function () {
		active = false;
		scrollerTop.classList.remove('scrolling');
	});
	document.body.addEventListener('touchcancel', function () {
		active = false;
		scrollerTop.classList.remove('scrolling');
	});

	document.querySelector('.design__slider--wrap').addEventListener('touchmove', function (e) {
		if (!active) return;
		e.preventDefault();
		var x = e.touches[0].pageX;
		x -= document.querySelector('.design__slider--wrap').getBoundingClientRect().left;
		scrollIt(x);
	});

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


	//fix-form
	var element = $(".fix-block");
	var height_el = element.offset().top;

	$(".form__wrap").css({
		"width": element.outerWidth(),
		"height": element.outerHeight()
	});

	$(window).scroll(function() {
		if($(window).scrollTop() > height_el) {
			element.addClass("fix-block--fixed");
		} else {
			element.removeClass("fix-block--fixed");
		}
	});
});
