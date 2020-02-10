$(document).on('mainPageLoaded', function () {
    // слайдер ДЭФО история
    var historySlider = new Swiper('.about-history__top', {
        slideClass: 'about-history__item',
        slidesPerView: 1,
        freeMode: false,
        breakpoints: {
            767: {
                freeMode: true,
                slidesPerView: 'auto',
            }
          }
    });

    $('.about-history__control-item a').each(function(index) {
        var coef = 0;
        if (index >= 4) coef+= 1;
        if (index >= 9) coef+= 1;
        if (index === 11) coef = 1;
        $(this).click(function(e) {
            e.preventDefault();
            historySlider.slideTo(index + coef);
        })
    });

    $('.about-history__item').each(function() {
        var popup = $(this).find('.about-history__popup');
        var pics = $(this).find('.about-history__pics img');

        pics.each(function() {
            var src = $(this).attr('src');
            $(this).click(function() {
                popup.find('img').attr('src', src);
                popup.addClass('active');
            })
        })

        popup.find('.about-history__popup-overlay').click(function() {
            popup.removeClass('active');
        })

        popup.find('.about-history__popup-close').click(function() {
            popup.removeClass('active');
        })

        var contentLink = $(this).find('.about-history__item-link.content');
        var contentItems = $(this).find('.about-history__item-content');
        var backLink = $(this).find('.about-history__item-back-link');

        contentLink.click(function(e) {
            e.preventDefault();
            contentItems.each(function() {
                $(this).toggleClass('hide');
            })
        })

        backLink.click(function(e) {
            e.preventDefault();
            contentItems.each(function() {
                $(this).toggleClass('hide');
            })
        })
    })

    // слайдер ДЭФО сегодня
    $('.about-today__wrapper').slick({
        arrows: false,
        dots: false,
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

    $('.about-today__item-name').matchHeight();
    
    // Дождёмся загрузки API и готовности DOM.
	ymaps.ready(function () {
		// Создание экземпляра карты и его привязка к контейнеру с
		// заданным id ("about-map").
		var myMap = new ymaps.Map('about-map', {
			center: [55.76, 37.64], // Москва
			zoom: 5
        });

        var createPlacemark = function(x, y) {
            return new ymaps.Placemark([x, y], {
                hintContent: ''
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: 'img/icons/map-point-icon.svg',
                // Размеры метки.
                iconImageSize: [45, 50],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, -50]
            })
        }
        
        var myPlacemark1 = createPlacemark(55.66, 37.57)
        var myPlacemark2 = createPlacemark(49.66, 35.57)
        var myPlacemark3 = createPlacemark(59.66, 40.57)
        var myPlacemark4 = createPlacemark(60.66, 30.57)

        myMap.geoObjects
            .add(myPlacemark1)
            .add(myPlacemark2)
            .add(myPlacemark3)
            .add(myPlacemark4);

    });
    
});
