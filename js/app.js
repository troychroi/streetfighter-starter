$(document).ready(function() {

	$('.instruct').on('mouseenter', function() {
		$('.instructions').slideToggle();
	});

	$('.instruct').on('mouseleave', function() {
		$('.instructions').slideToggle();
	});

	$('.main').animate({'opacity': '1'}, 200);
	$('.ryu').delay(300).animate({'opacity': '1'}, 600);


	function playHadouken () {
		$('#hadouken-sound')[0].volume = 0.5;
		$('#hadouken-sound')[0].load();
		$('#hadouken-sound')[0].play();
	}

	$(document).keydown(function(event) {
		if (event.which == 88) {
			$('.ryu-still').hide();
			$('.ryu-ready').hide();
			$('.ryu-cool').show();
			$('.main').addClass('jquery-switch');
		}
	})
	.keyup(function(event) {
		if (event.which == 88) {
			$('.ryu-still').show();
			$('.ryu-cool').hide();
			$('.main').removeClass('jquery-switch');
		}	
	});


	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();
	})
	.mousedown(function() {
		playHadouken();
 		$('.ryu-ready').hide();
 		$('.ryu-throwing').show();
 		$('.hadouken').show();
 		$('.hadouken').finish().show()
 		.animate(
 			{'left': '300px'},
 			500,
 			function(){
 				$(this).hide();
 				$(this).css('left', '-212px');
 			}
 		);
 	})
	.mouseup(function() {
		$('.ryu-ready').show();
 		$('.ryu-throwing').hide();
	});
});