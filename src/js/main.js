$(document).ready(function() {
	if ($(window).width() > 1900) {
		$(".diamondswrap").diamonds({
			size: 475,
			gap: 10
		});
	}
	if ($(window).width() > 1675 && $(window).width() < 1900) {
		$(".diamondswrap").diamonds({
			size: 320,
			gap: 10
		});
	}
	if ($(window).width() > 1365 && $(window).width() < 1675) {
		$(".diamondswrap").diamonds({
			size: 320,
			gap: 10
		});
	}
	if ($(window).width() > 1199 && $(window).width() < 1366) {
		$(".diamondswrap").diamonds({
			size: 280,
			gap: 10
		});
	}
	if ($(window).width() > 1199) {
		$(".home-6 .feedback").height(
			$(".home-6 h2.uk-margin-small-top").height() +
				$(".home-6 .news.big").height() -
				30
		);
	}

	$(window).resize(function() {
		if ($(window).width() > 1199) {
			$(".home-6 .feedback").height(
				$(".home-6 h2.uk-margin-small-top").height() +
					$(".home-6 .news.big").height() -
					30
			);
		}
	});
});

$(document).on("load", function() {});
const menuLeftMapping = new MappingListener({
	selector: ".menu-left",
	mobileWrapper: ".uk-offcanvas-bar",
	mobileMethod: "appendTo",
	desktopWrapper: ".menu-left-wrapper",
	desktopMethod: "appendTo",
	breakpoint: 1025
}).watch();
const menuRightMapping = new MappingListener({
	selector: ".menu-right",
	mobileWrapper: ".uk-offcanvas-bar",
	mobileMethod: "appendTo",
	desktopWrapper: ".menu-right-wrapper",
	desktopMethod: "appendTo",
	breakpoint: 1025
}).watch();
const searchMapping = new MappingListener({
	selector: ".uk-search",
	mobileWrapper: ".uk-offcanvas-bar",
	mobileMethod: "appendTo",
	desktopWrapper: ".search-wrapper",
	desktopMethod: "appendTo",
	breakpoint: 1025
}).watch();
