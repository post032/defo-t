$(document).on('mainPageLoaded', function () {
	$(".shop-adress__content").hide();
	$("ul.shop-adress__menu--list li:first").addClass("shop-adress__menu--item-active").show();
	$(".shop-adress__content:first").show();

	$("ul.shop-adress__menu--list li").click(function() {
		$("ul.shop-adress__menu--list li").removeClass("shop-adress__menu--item-active");
		$(this).addClass("shop-adress__menu--item-active");
		$(".shop-adress__content").hide();
		var activeTab = $(this).find("a").attr("href");
		$(activeTab).fadeIn();
		return false;
	});
});
