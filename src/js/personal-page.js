$(document).on('mainPageLoaded', function () {
    $('.personal-page__menu-button').click(function () {
        if ($(this).hasClass('active')) {
            $('.personal-page__menu').removeClass('active');
        } else {
            $('.personal-page__menu').addClass('active');
        }

        $(this).toggleClass('active');
    });

    $('.personal-page__promo-button').click(function () {
        if ($(this).hasClass('active')) {
            $('.personal-page__promo-codes').removeClass('active');
        } else {
            $('.personal-page__promo-codes').addClass('active');
        }

        $(this).toggleClass('active');
    });

    function checkChecked() {
        var checked = false;
        $('.personal-form .extra-services__checkbox').each(function() {
            if ($(this).prop('checked')) {
                checked = true;
            }
        });

        return checked;
    };

    $('.personal-form .extra-services__checkbox').click(function () {
		if (checkChecked()) {
            $('.personal-page__email-pic').addClass('active');
        } else {
            $('.personal-page__email-pic').removeClass('active');
        }
    });
    
    $('.js-address-btn').click(function () {
        $(this).addClass('display-none');
        $('.js-address-field').removeClass('display-none');

        if ($('.js-org-btn').hasClass('display-none')) {
            $('.personal-form__fieldset.buttons').addClass('display-none');
        }
    });

    $('.js-address-del').click(function () {
        $('.js-address-field').addClass('display-none');
        $('.js-address-btn').removeClass('display-none');
        $('.personal-form__fieldset.buttons').removeClass('display-none');
    })

    $('.js-org-btn').click(function () {
        $(this).addClass('display-none');
        $('.js-org-field').removeClass('display-none');

        if ($('.js-address-btn').hasClass('display-none')) {
            $('.personal-form__fieldset.buttons').addClass('display-none');
        }
    });

    $('.js-org-del').click(function () {
        $('.js-org-field').addClass('display-none');
        $('.js-org-btn').removeClass('display-none');
        $('.personal-form__fieldset.buttons').removeClass('display-none');
    })

    $('.personal-page__promo-link').click(function (e) {
        e.preventDefault();
        $('.promocode-popup').addClass('active');
        $('body').css({'overflow':'hidden'});
    })

    $('.unsubscribe-link').click(function (e) {
        e.preventDefault();
        $('.delivery-popup__inner').removeClass('hide');
        $('.delivery-popup .promocode-popup__inner').addClass('hide');
        $('.delivery-popup').addClass('active');
        $('body').css({'overflow':'hidden'});
    })

    $('.personal-form__add-button.pass').click(function () {
        $('.password-popup').addClass('active');
        $('body').css({'overflow':'hidden'});
    })

    $('.delivery-popup__ok-btn').click(function () {
        $('.delivery-popup__inner').addClass('hide');
        $('.delivery-popup .promocode-popup__inner').removeClass('hide');
    })

    $('.delivery-popup__cancel-btn').click(function () {
        $('.personal-page-popup').removeClass('active');
        $('body').css({'overflow':'visible'});
    })

    $('.personal-page-popup__close-btn').click(function () {
        $('.personal-page-popup').removeClass('active');
        $('body').css({'overflow':'visible'});
    })

    $('.personal-page-popup__overlay').click(function () {
        $('.personal-page-popup').removeClass('active');
        $('body').css({'overflow':'visible'});
    })

    $('.personal-orders__header-button').click(function () {
        $(this).parents('.personal-orders__order').toggleClass('active');
    })
})