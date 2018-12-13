$(document).ready(function() {

	// $('.zub_li').click(function(event) {
	// 	$('.table_peredachi').toggleClass('table_peredachi_active');
	// 	// $('.zub').toggleClass('bg_zub');
	// 	return true;
	// });


	$('.zub_div').click(function(event) {
		$('.zub_pod_ul').toggleClass('active_zub');
	});



	$('.slid_guides').click(function(event) {
		$('.table_peredachi').toggleClass('table_peredachi_active');
		$('.slid_guides').toggleClass('bg_zub');
	});


	$('.slider_a_c').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		dots:false,
		prevArrow: $(".prevs"),
		nextArrow: $(".nexts"),
		asNavFor: '.slider_a_c2',
		responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplay: true,
			}
		}
		]
	});

	$('.slider_a_c2').slick({
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: false,
		dots: true,
		asNavFor: '.slider_a_c',
		responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				autoplaySpeed: 2000,
			}
		}
		]
	});

	$('.slider_a_c_two').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		dots:false,
		prevArrow: $(".prevs1"),
		nextArrow: $(".nexts1"),
		asNavFor: '.slider_a_c_two2',
		responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		}
		]
	});

	$('.slider_a_c_two2').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.slider_a_c_two',
		responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		}
		]
	});

	$('.slider_a_c_sleder').slick({
		infinite: true,
		slidesToScroll: 1,
		arrows: true,
		  variableWidth: true,
		responsive: [
		{
			breakpoint: 800,
			settings: {
				arrows: false,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		}
		]
	});


	$('.slider_index').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $(".prevs2"),
		nextArrow: $(".nexts2"),
		asNavFor: '.slider_index2',
		responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		}
		]
	});

	$('.slider_index2').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: $(".prevs2"),
		nextArrow: $(".nexts2"),
		asNavFor: '.slider_index',
		responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		}
		]
	});

	$('.slider2_index').slick({
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: $(".prevs3"),
		nextArrow: $(".nexts3"),
		dots: true,
		responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplaySpeed: 2000,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplaySpeed: 2000,
			}
		}
		]
	});

// Slider end

});


$(".li_kit").click(function(e) {
  e.preventDefault();
  $(this).toggleClass('li_active_services');
if ($('.zub_pod_ul ').hasClass('active_zub')) {
	$('.table_peredachi ').removeClass('table_peredachi_active')
}
})




// меню
$('.menu-btn').on('click', function(e) {
	e.preventDefault();
	$('.menu_media').toggleClass('menu_active');
	$('.menu-btn').toggleClass('menu_btn_active');
	$('body').toggleClass('body_menu_active');
	$('.indexbg1').toggleClass('indexbg1_active');
});

// login and registr
$('.registr_btn, .registr_btn_med').on('click', function(e) {
	e.preventDefault();
	$('.login_block').hide();
	$('.registr_block').show();
	$('.menu_media').removeClass('menu_active');
	$('.menu-btn').removeClass('menu_btn_active');
	$('body').removeClass('body_menu_active');
});

// login and registr
$('.login_btn, .login_btn_media').on('click', function(e) {
	e.preventDefault();
	$('.registr_block').hide();
	$('.login_block').show();
	$('.menu_media').removeClass('menu_active');
	$('.menu-btn').removeClass('menu_btn_active');
	$('body').removeClass('body_menu_active');
});

// login and registr video
$('.back_icon_x').on('click', function(e) {
	e.preventDefault();
	$('.media_play_video').hide();
});




$('.panel-title').on('click', function(e) {
	e.preventDefault();
	$('.panel-title a::before').css('content','url(../img/minus.png)');
});



// $(document).on('click', '.close , .in', function (e) {
//     var video = $('#mod_video').get(0);
//     if (video.paused === false) {
//         video.pause();
//     } 

//     return false;
// });




$(document).on('click', '.play_video', function (e) {
    var video = $('#video').get(0);
    if (video.paused === false) {
        video.pause();
               $('.play_video').attr('src', 'img/play.png');
       
    } else {
        video.play();
           $('.play_video').attr('src', 'img/pause.png');


    }

    return false;
});


var $btns = $('.lab_check_page').click(function() {
  if (this.id == 'all') {
    $('.news_ul > li').fadeIn(450);
  } else {
    var $el = $('.' + this.id).fadeIn(450);
    $('.news_ul > li').not($el).hide();
  }
  $btns.removeClass('lab_check_page_active');
  $(this).addClass('lab_check_page_active');
})