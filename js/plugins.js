$(document).ready(function(){
	// Global Variables

	var toggle_primary_button = $('.nav_toggle_button i'),
		toggle_primary_icon = $('.nav_toggle_button i'),
		toggle_secondary_button = $('nav li span'),
		toggle_secondary_icon = $('nav li span i'),
		primary_menu = $('nav'),
		secondary_menu = $('nav ul ul'),
		webHeight = $(document).height(),
		window_width = $(window).width();

	//Multi-line Tab
	$('nav li span').click(function() {
		$('nav ul ul').not( $(this).parents('li').find('ul') ).slideUp(400, function() {
			$(this).removeAttr('style');
		});
		$('nav li span i').not( $(this).children() ).removeClass("fa-caret-up").addClass("fa-caret-down");

		$(this).parents('li').find('ul').slideToggle();
		$(this).children().toggleClass("fa-caret-up").toggleClass("fa-caret-down");
	})

	// Basic functionality for nav_toggle_button

	var hamburger = $(".hamburger");
    hamburger.each(function(){
        $(this).click(function(){
         $(this).toggleClass("is-active");
        });
      });


	hamburger.click(function(){
		primary_menu.stop().toggleClass('active');
		toggle_primary_icon.toggleClass("fa-times").toggleClass("fa-navicon");
		$('body').toggleClass('noscroll');
		$('.nav_btn').toggleClass('nav_btn_active');
		$('.nav_toggle_button').toggleClass('nav_toggle_button_active');
	});

	// Add class to tab having drop down
	$( "nav li:has(ul)").find('span i').addClass("fa-caret-down");

	$(window).resize(function(){

		if(window_width > 1200 && primary_menu.is(':visible') || primary_menu.is(':hidden')) {
			primary_menu.removeAttr('style');
			hamburger.removeClass('is-active');
			primary_menu.removeClass('active');
			$('.nav_btn').removeClass('nav_btn_active');
			$('body').removeClass('noscroll');
			$('.nav_toggle_button').removeClass('nav_toggle_button_active');

			// toggle_primary_icon.removeClass("fa-times").addClass("fa-navicon");  (e remove nalng ni siya kai wala naman ni nato nagamit)
		}

	});

	$('.nav_btn').click(function(){
		$(this).removeClass('nav_btn_active');
		hamburger.removeClass('is-active');
		primary_menu.removeClass('active');
		$('body').removeClass('noscroll');
		$('.nav_toggle_button').removeClass('nav_toggle_button_active');
	});

	// Reset all configs when width > 1200
	function myFunction(){
	    if(window_width <= 1200){
	        $('.social-media').insertAfter('nav ul');
	    }else{
	        $('.social-media').insertAfter('.navigation');
	    }
	}

	//Navigation Active
	const sections = document.querySelectorAll('section');
	const navLi = document.querySelectorAll('nav ul li');

	window.addEventListener('scroll', ()=> {
		let current = '';

		sections.forEach( section => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;

			if(pageYOffset >= (sectionTop - sectionHeight)) {
				current = section.getAttribute('id');
			}

			// if(pageYOffset >= (sectionTop - sectionHeight / 3)) {
			// 	current = section.getAttribute('id');
			// }
		})

		navLi.forEach( li => {
			li.classList.remove('active');
			if(li.classList.contains(current)){
				li.classList.add('active')
			}
		})
	})

	//End of Navigation Active

	//Progress Bar Animation
	const skillsSection = document.getElementById('skills-section');
	const progressBars = document.querySelectorAll('.progress-bar');

	function showProgress() {
		progressBars.forEach(progressBar=> {
			const value = progressBar.dataset.progress;

			progressBar.style.opacity = 1;
			progressBar.style.width = `${value}%`;
		});
	}
	
	function hideProgress() {
		progressBars.forEach(p => {
			p.style.opacity = 0;
			p.style.width = 0;
		});
	}

	window.addEventListener('scroll',() => {
		const sectionPos = skillsSection.getBoundingClientRect().top;
		const screenPos = window.innerHeight / 2;

		if(sectionPos < screenPos){
			showProgress();
		}else {
			hideProgress();
		}
	})

	//End of Progress Bar Animation

	//slide-in and faders Animation
	
	const faders = document.querySelectorAll(".fade-in");
	const sliders = document.querySelectorAll(".slide-in");

	const optionsOptions = {
		threshold: 0,
		rootMargin: "0px 0px -200px 0px"
	};

	const appearOnScroll = new IntersectionObserver
	(function(
		entries, 
		appearOnScroll
	) {
		entries.forEach(entry => {
			if (!entry.isIntersecting) {
				return;
			}else {
				entry.target.classList.add("appear");
				appearOnScroll.unobserve(entry.target);
			}
		});
	},
	optionsOptions);

	faders.forEach(fader => {
		appearOnScroll.observe(fader);
	});

	sliders.forEach(slider => {
		appearOnScroll.observe(slider);
	});

	//End of slide-in and faders Animation


	// myFunction(); //execute function when page load

	$(window).resize(function(){

	    window_width = $(this).width();
	    myFunction();

		secondary_menu.slideUp(400, function() {
			$(this).removeAttr('style');
		});
		toggle_secondary_icon.removeClass("fa-caret-up").addClass("fa-caret-down");

	}); //execute every windows resize

	$('.close-btn').click(function() {
		$(this).parents('div.exp-res').removeClass('active');
		$(this).parents('.section2 .wrapper').removeClass('overlay');
		$('body').removeClass('hidden');
	});

	$('ul.toggle-holder li .exp-dates').click(function() {
		$(this).siblings('div.exp-res').addClass('active');
		$(this).parents('.section2 .wrapper').addClass('overlay');
		$('body').addClass('hidden');
	});

	$('.hire-me').click(function() {
		$(this).siblings('.about-content').addClass('active');
		$(this).parents('.section1 .wrapper').addClass('overlay');
		$('body').addClass('hidden');
		
	});

	$('.close-btn').click(function() {
		$(this).parents('.about-content').removeClass('active');
		$(this).parents('.section1 .wrapper').removeClass('overlay');
		$('body').removeClass('hidden');
	});
	

	$(".rslides").responsiveSlides({
		auto: false,             // Boolean: Animate automatically, true or false
		pager: true,           // Boolean: Show pager, true or false
	});


	$('.back_top').click(function () { // back to top
		$("html, body").animate({
			scrollTop: 0
		}, 900);
		return false;
	});

	$(window).scroll(function(){  // fade in fade out button
	var windowScroll = $(this).scrollTop();

		if (windowScroll > (webHeight * 0.5) ) {
			$(".back_top").fadeIn();
		} else{
			$(".back_top").fadeOut()
		};

	});

    //particles
    var count_particles, stats, update;
    stats = new Stats;
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '0px';
    stats.domElement.style.top = '0px';
    document.body.appendChild(stats.domElement);
    count_particles = document.querySelector('.js-count-particles');
    update = function() {
      stats.begin();
      stats.end();
      if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
      }
      requestAnimationFrame(update);
    };
    requestAnimationFrame(update);

});
