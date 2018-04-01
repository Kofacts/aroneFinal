$(document).ready(function()
{

	var navbar = $('.navbar-default');
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
			$('.scrollTop').fadeOut();
		} else {
			navbar.addClass('navbar-scroll');

			$('.scrollTop').show().fadeIn();
		}
	});

	$('button#floatDown').click(function(){
		// Scroll to a certain element
		document.querySelector('.paddMeTop').scrollIntoView({ 
		  behavior: 'smooth' 
		});
	});

	$('button.scrollTop').click(function(){
		document.querySelector('.navsection').scrollIntoView({ 
		  behavior: 'smooth' 
		});
	})

	$(".rotate").textrotator({
	  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
	  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
	  speed: 2000 // How many milliseconds until the next word show.
	});

})


