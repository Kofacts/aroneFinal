$(document).ready(function()
{
	$('.page-loader-wrapper').hide();

	var navbar = $('.navbar-default');
	$(window).scroll(function(){
		if($(window).scrollTop() <= 40){
			navbar.removeClass('navbar-scroll');
			$('.scrollTop').fadeOut();
		} else {
			navbar.addClass('navbar-scroll');
			$('button.navbar-toggle').css('background','#FF6600');
			$('button.navbar-toggle:hover').css('background','#FF6600');
			$('button.navbar-toggle').css('border-radius','0px');
			$('.scrollTop').show().fadeIn();
		}
	});

	$('button#scrollBottom').click(function(){
		// Scroll to a certain element
		document.querySelector('.secondBg').scrollIntoView({ 
		  behavior: 'smooth' ,
		  block: 'end',
		});
	});

	$('button.paddMeTop2').click(function(){
		// Scroll to a certain element

		document.querySelector('section.paddNoMe').scrollIntoView({ 
		  behavior: 'smooth' ,
		  block: 'end',
		});
	});

	$('button.paddMeTop2').click(function(){
		// Scroll to a certain element
		document.querySelector('.Section80').scrollIntoView({ 
		  behavior: 'smooth' ,
		  block: 'start'
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

	var docHeight = $(window).height();
   var footerHeight = $('#footer').height();
   var footerTop = $('#footer').position().top + footerHeight;

   if (footerTop < docHeight) {
    $('#footer').css('margin-top', 10+ (docHeight - footerTop) + 'px');
   }

})


