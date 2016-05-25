$(document).ready(function() {

	// $(".content-left-effect, .content-right-effect").css("max-height", $(".fade-in").innerHeight())


	$(".preview-switcher").hover(
		function() {
			if ($(window).width() > 961) {
				$(".preview-content").css("top", $(this).offset().top - $(window).scrollTop() - 100)
			} else {
				$(".preview-content").css("top", 18)
			}
			$(".preview-content p").text("")
			$(".preview-content").css("background-image", "url(" + $(this).attr("data-img") + ")")
			$(".preview-content").toggleClass("show")
		},
		function() {
			$(".preview-content").toggleClass("show")
		}
	)


	$(".preview-switcher-text").hover(
		function() {
			if ($(window).width() > 961) {
				$(".preview-content").css("top", $(this).offset().top - $(window).scrollTop() - 100)
			} else {
				$(".preview-content").css("top", 18)
			}
			
			$(".preview-content").css("background-image", "none")
			$(".preview-content p").text($(this).attr("data-text"))
			$(".preview-content").toggleClass("show")
		},
		function() {
			$(".preview-content").toggleClass("show")
		}
	)
})
