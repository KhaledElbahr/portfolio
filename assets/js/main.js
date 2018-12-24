/*global Console, $ , $body, $window*/
$(window).on('load', function () {
	'use strict';
	//loading page	
    $('.site-loader').fadeOut(4000, function () {
		$(this).parent().fadeOut(500, function () {
			$(this).remove();
			$("body").css("overflow-y", "auto");
		});
	});
});

$(window).ready(function () {
	'use strict';
	//Sync Navbar Links With Sections
	$(window).scroll(function () {
		$('.block').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - 70) {
				var blockID = $(this).attr('id');
				$('#link li a').removeClass('active');
				$('#link li a[data-scroll="' + blockID + '"]').addClass('active');
			}
		});
	});
	//close navbar collapse when click on the links
	$('.navbar-collapse a,.navbar-brand').on('click', function () {
        $(".navbar-collapse").collapse('hide');
    });
    //Adjust navbar background when scroll
	$(window).on("scroll", function () {
		if ($(window).scrollTop() > 100) {
			$("nav").addClass("affix");
		} else {
			$("nav").removeClass("affix");
			$('#link li a').removeClass('active');
		}
	});
	//Links Add Active Class
	$('#link li a').click(function () {
		$(this).parent().addClass('active').siblings().removeClass('active');
	});
	//Smooth Scroll To Section
	$('#link li a,#hire').click(function () {
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('value')).offset().top - 65
		}, 700);
	});
    $("#toTop,.navbar-brand").click(function () {
		$("html,body").animate({scrollTop: 0}, 700);
		return false;
	});
	//Control the Scroll Icon
	$(document).scroll(function (e) {
		var scrollPos = $(this).scrollTop();
		if (scrollPos < 380) {
			$("#toTop").addClass('hide');
		} else {
			$("#toTop").removeClass('hide');
		}
	});
	//typed library
	var element = $(".element");
    element.typed({
        strings: ["Front End Web Developer", "Back End Web Developer"],
        typeSpeed: 100,
        loop: true,
	    showCursor: false,
		smartBackspace: true,
		backDelay: 2000
    });
	//parallex Effect
	$(window).scroll(function () {
		var ypos = $(this).scrollTop(),
            opaScroll = 1.8 - ypos / 400;
		
		$(".element").css({
			'transform': 'translateY(' + ypos / 2.5 + '%)',
			'opacity' : opaScroll
		});
	});
});