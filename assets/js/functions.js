//Window Scroll Reveals
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();



//Hero Parallax
  $('#tagline').css({
    'transform' : 'translate(0px, '+ wScroll /3 +'%)'
  });

var fadeStart=0,
  fadeUntil=500,
  fading = $('#tagline')
  ;

$(window).bind('scroll', function(){
    var offset = $(document).scrollTop(),
        opacity=0
    ;
    if( offset<=fadeStart ){
        opacity=1;
    }else if( offset<=fadeUntil ){
        opacity=1-offset/fadeUntil;
    }
    fading.css('opacity',opacity);
});

  //Cinematography Reveal
  if(wScroll > $('.you-tube-badge').offset().top - ($(window).height() / 1.2)) {

    $('.you-tube-badge').each(function(i){

      setTimeout(function(){
        $('.you-tube-badge').eq(i).addClass('is-pulsed');
      }, 200 * (i+1));
    });

  }



  if(wScroll > $('.videos-cont').offset().top - ($(window).height() / 1.1)) {

    $('.videos-cont').each(function(i){

      setTimeout(function(){
        $('.videos-cont').eq(i).addClass('vid-slide');
      }, 200 * (i+1));
    });

  }


  $(document).ready(function() {
  $('.star_wars_thumb').on('click', function(ev) {

    $("#youtube")[0].src += "&autoplay=1";
    ev.preventDefault();

  });
});

//photography
  if(wScroll > $('.ig-button').offset().top - ($(window).height() / 1.1)) {

    $('.ig-button').each(function(i){

      setTimeout(function(){
        $('.ig-button').eq(i).addClass('animate');
      }, 200 * (i+1));
    });

  }

//sound
  if(wScroll > $('.eq-bar').offset().top - ($(window).height() / 1)) {

    $('.eq-bar').each(function(i){

      setTimeout(function(){
        $('.eq-bar').eq(i).addClass('eq-on');
      },25* (i+1));
    });

  }

  if(wScroll > $('.web-build-container').offset().top - ($(window).height() / 1)) {

    $('.web-design a.web-build').each(function(i){

      setTimeout(function(){
        $('.web-design a.web-build').eq(i).addClass('wb-is-showing');
      }, 200 * (i+1));
    });

  }

});

//Mobile Navigation Toggle
function mobileNav() {
  $('.mobile-nav-toggle').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('.mobile-nav-toggle, .mobile-nav').removeClass('is-open'); }
    else { $('.mobile-nav-toggle, .mobile-nav').addClass('is-open'); }
  });
}

//Smooth Scroll
function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    var target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top -89
	        }, duration);
	    }
	});
}

//Navigation Shrink
function navShrink() {
  $('a[href^="#"]').on('click', function() {
     $('.mobile-nav-toggle, .mobile-nav, section.cinematography-page, section.photography-page, section.sound-page, section.graphic-design-page, section.web-design-page, .close-pop-up-botton, body').removeClass('is-open'); }
  );
}

// SOUND EQ BARS
$(window).scroll(function(){
  var bars = document.getElementsByClassName('eq-bar');
  [].forEach.call(bars, function (bar) {
    bar.style.height = Math.random() * 100 + '%';
  });
});


$(function() {
  mobileNav();
  smoothScroll();
  navShrink();
});
