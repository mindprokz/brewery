import FloatMenu from './floatMenu.js';
import initFeed from './modal_feed'

new FloatMenu().mobileClicker(
  document.querySelector('.burger'),
  document.querySelector('.mobile_menu')
);

new FloatMenu().init(document.querySelector('#fix_menu'));

$('.sl').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true
});

$('.sl_menu').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true
});

$('.sl_stocks').slick({
  dots: true,
  infinite: true,
  adaptiveHeight: true
});

// fancybox
$(".fancybox").click(function() {
	$(".fancybox").fancybox({
		openEffect: 'fade',
		closeEffect: 'fade'
	});
});

$(document).on('click', 'a.anchor', function () {
  $('html, body').animate({ scrollTop:  $('a[name="'+this.hash.slice(1)+'"]').offset().top - 152 }, 1000 );
  return false;
});

initFeed();
