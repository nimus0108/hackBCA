"use strict";

$(function () {


	var dataPath = 'data.json';
	
	$('.faq').click(function () {
		$(this).toggleClass('flipped');
	});

	$.getJSON(dataPath, function (data) {

		var guests = data.guests
			, sponsors = data.sponsors
			, faq = data.faq;

		var $guests = $('#guest__container')
			, $sponsors = $('#sponsors__container')
			, $faq = $('#faq__container');

		(function () {
			for (var i = 0, len = guests.length; i < len; i++) {
				$guests.append('<div class="guest"><figure class="guest__portrait"></figure><hgroup><span class="guest__role">' + guests[i].role + '</span><h1 class="guest__name">' + guests[i].name + '</h1><h2 class="guest__description">' + guests[i].description + '</h2></hgroup></div>');
			}
		})();

		(function () {
			for (var i = 0, len = guests.length; i < len; i++) {
				$faq.append('<div class="faq__container"><div class="faq"><div class="faq__front"><h1 class="faq__question"></h1></div><div class="faq__back"><p class="faq__answer"></p></div></div>');
			}
		})();

		(function () {
			for (var i = 0, len = sponsors.length; i < len; i++) {
				$sponsors.append();
			}
		})();

	});
});