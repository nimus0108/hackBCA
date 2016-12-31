"use strict";

$(function () {

	var DATA_PATH = 'data.json'
		, DATE = '02/19/2017 10:1 AM';

	var end = new Date('02/19/2012 10:1 AM');
	var $time = $('time');

	var _second = 1000;
	var _minute = _second * 60;
	var _hour = _minute * 60;
	var _day = _hour * 24;

	function showRemaining() {
		var now = new Date();
		var distance = end - now;

		//		if (distance < 0) {
		//			clearInterval(timer);
		////			$time.innerHTML = '0';
		//			return;
		//		}

		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		//		alert(days);

		//		$time.html(days + ' : ' + hours + ' : ' + minutes);
	}

	var timer = setInterval(showRemaining, 1000);


	$.getJSON(DATA_PATH, function (data) {

		var guests = data.guests
			, desc = data.desc
			, $splashContainer = $('#splash_img')
			, splashImage = data.splashImageURL
			, $desc = $('.jumbo__statement__text')
			, faq = data.faq
			, $guests = $('#guest__container')
			, $faq = $('#faq__container');

		$desc.append(desc);

		$splashContainer.attr("src", splashImage);

		(function () {
			for (var i = 0, len = guests.length; i < len; i++) {
				$guests.append('\
				<div class="guest">\
					<figure class="guest__portrait">\
						<img src="' + guests[i].url + '"/>\
					</figure>\
					<hgroup>\
						<span class="guest__role">' + guests[i].role + '</span>\
						<h1 class="guest__name">' + guests[i].name + '</h1>\
						<h2 class="guest__description">' + guests[i].description + '</h2>\
					</hgroup>\
				</div>');
			}
		})();

		(function () {
			for (var i = 0, len = faq.length; i < len; i++) {
				$faq.append('\
				<div class="faq__container">\
					<div class="faq">\
						<div class="faq__front" onclick="flipped()">\
							<h1 class="faq__question">' + faq[i].question + '</h1>\
						</div>\
						<div class="faq__back">\
							<p class="faq__answer">' + faq[i].answer + '</p>\
						</div>\
					</div>\
				</div>');
			}
		})();

	});
});