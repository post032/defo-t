$(document).on('mainPageLoaded', function () {
	// табы
	$('.order-form__tabs').on('click', '.order-form__radio-btn', function(evt) {
		$(this)
			.addClass('active').parent().siblings().find('.order-form__radio-btn').removeClass('active')
			.parents('.order-form__tabs').siblings('.order-form__tabs-content').find('.order-form__tab-content').removeClass('active').eq($(this).parent().index()).addClass('active');

		$paymentTypeId = evt.target.getAttribute('id');
		switch ($paymentTypeId) {
			case 'fiz':
				$('.payment-type-content').removeClass('active');
				$('#payment-fiz').addClass('active');
				break;

			case 'ur':
				$('.payment-type-content').removeClass('active');
				$('#payment-ur').addClass('active');
				break;
		}
	});

	// переключение САМОСТОЯТЕЛЬНЫЙ ЗАКАЗ или ЗАКАЗ ЧЕРЕЗ КОЛЛ ЦЕНТР
	$('.order-form__step--head.first-step').on('click', '.order-form__radio-btn', function (event) {
		$buyTypeId = event.target.getAttribute('id');

		switch ($buyTypeId) {
			case 'myself' :
				$('.order-form__step-block').removeClass('active');
				$('.order-form__step-block--myself').addClass('active');
				break;
			case 'call-center':
				$('.order-form__step-block').removeClass('active');
				$('.order-form__step-block--call-center').addClass('active');
				break;
		}

	});


	// получить консультацию
	$('.order-form__btn-consultation').click(function (evt) {
		evt.preventDefault();

		$('.order-form-feedback').addClass('show');
		$('.overlay').addClass('visible');
	});

	$('.order-form-feedback .order-form__close-sm').click(function () {

		$('.order-form-feedback').removeClass('show');
		$('.overlay').removeClass('visible');
	});


	// открытие/скрытие списка товаров в заказе
	var showListBtn = $('.order-items-block .show');
	var hideListBtn = $('.order-items-block .hide');

	showListBtn.click(function () {
		$('.order-items-block__prod-list').slideDown();
		hideListBtn.fadeIn();
		showListBtn.fadeOut();
	});

	hideListBtn.click(function () {
		$('.order-items-block__prod-list').slideUp();
		hideListBtn.fadeOut();
		showListBtn.fadeIn();
	});


	// переключение по шагам
	//================ шаги вперед =========

	// переход на способ доставки
	$('.order-form__next-step.to-second-step').click(function (evt) {
		evt.preventDefault();
		$('.order-form__step').removeClass('active');
		$('.order-form__step--second').addClass('active');

		// показ блока с товарами, если это не первый шаг
		$('.order-items-block').show();

		// переключение картинок шагов в шапке
		$('.stage').removeClass('active');
		$('.stage.stage-one').addClass('done');
		$('.stage.stage-two').addClass('active');
	});

	// переход на способ оплаты
	$('.order-form__next-step.to-third-step').click(function (evt) {
		evt.preventDefault();
		$('.order-form__step').removeClass('active');
		$('.order-form__step--third').addClass('active');

		// переключение картинок шагов в шапке
		$('.stage').removeClass('active');
		$('.stage.stage-two').addClass('done');
		$('.stage.stage-three').addClass('active');
	});

	// переход на последний шаг
	$('.order-form__order.submit, .call-center-submit').click(function (evt) {
		evt.preventDefault();
		$('.order-form__step').removeClass('active');
		$('.order-form__step--fourth').addClass('active');

		// переключение картинок шагов в шапке
		$('.order .main-content').addClass('wide-block');
		$('.order-stage').addClass('hidden');
		$('.order .sidebar').addClass('hidden');
	});


	//=========== шаги назад ==========
	// переход на способ доставки
	$('.order-form__prev-step.to-second-step').click(function (evt) {
		evt.preventDefault();
		$('.order-form__step').removeClass('active');
		$('.order-form__step--second').addClass('active');

		// переключение картинок шагов в шапке
		$('.stage').removeClass('active');
		$('.stage.stage-three').removeClass('done');
		$('.stage.stage-two').removeClass('done');
		$('.stage.stage-two').addClass('active');

	});

	// переход на способ покупки
	$('.order-form__prev-step.to-first-step').click(function (evt) {
		evt.preventDefault();
		$('.order-form__step').removeClass('active');
		$('.order-form__step--first').addClass('active');

		// скрытие блока с товарами, если это не первый шаг
		$('.order-items-block').hide();

		// переключение картинок шагов в шапке
		$('.stage').removeClass('active');
		$('.stage.stage-two').removeClass('done');
		$('.stage.stage-one').removeClass('done');
		$('.stage.stage-one').addClass('active');
	});

	// срытие блока со списком товаров на первом шаге
	if ($('.order-form__step--first').hasClass('active')) {
		$('.order-items-block').hide();
	} else {
		$('.order-items-block').show();
	}





});
