//Just for steve since he doesn't like my tagline
/*$(function() {
    $.getJSON("https://api.ipify.org?format=jsonp&callback=?",
      function(json) {
        if  (json.ip === '50.248.3.174' || json.ip === '4.34.212.243')
        {$('#tagline').text("Working in All Things Production");}
      }
    );
  });*/

//Window Scroll Reveals
$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

//Hero Parallax
  $('.home h1').css({
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
  if(wScroll > $('.pro-body').offset().top - ($(window).height() / 1.2)) {

    $('.pre-pro, .post-pro').each(function(i){

      setTimeout(function(){
        $('.pre-pro, .post-pro').eq(i).addClass('pro-body-is-visable');
      }, 200 * (i+1));
    });

  }

  if(wScroll > $('.you-tube-badge').offset().top - ($(window).height() / 1.2)) {

    $('.you-tube-badge').each(function(i){

      setTimeout(function(){
        $('.you-tube-badge').eq(i).addClass('is-pulsed');
      }, 200 * (i+1));
    });

  }

  /*if(wScroll > $('.view-more-cinematography-wrapper').offset().top - ($(window).height() / 1)) {

    $('.view-more-cinematography-wrapper').each(function(i){

      setTimeout(function(){
        $('.view-more-cinematography-wrapper').eq(i).addClass('cinematography-page-button');
      }, 200 * (i+1));
    });

  }*/

  //Photography Reveal
  if(wScroll > $('.instagram-badge').offset().top - ($(window).height() / 1)) {

    $('.instagram-badge').each(function(i){

      setTimeout(function(){
        $('.instagram-badge').eq(i).addClass('photography-is-visable');
      }, 200 * (i+1));
    });

  }

  /*if(wScroll > $('.view-more-photography-wrapper').offset().top - ($(window).height() / 1)) {

    $('.view-more-photography-wrapper').each(function(i){

      setTimeout(function(){
        $('.view-more-photography-wrapper').eq(i).addClass('photography-page-button');
      }, 200 * (i+1));
    });

  }*/

  if(wScroll > $('.instagram-glyph').offset().top - ($(window).height() / 1.2)) {

    $('.instagram-glyph').each(function(i){

      setTimeout(function(){
        $('.instagram-glyph').eq(i).addClass('is-tada');
      }, 200 * (i+1));
    });

  }

//Sound Reveal
  /*if(wScroll > $('.view-more-sound-wrapper').offset().top - ($(window).height() / 1)) {

    $('.view-more-sound-wrapper').each(function(i){

      setTimeout(function(){
        $('.view-more-sound-wrapper').eq(i).addClass('sound-page-button');
      }, 200 * (i+1));
    });

  }*/

  if(wScroll > $('.eq-bar').offset().top - ($(window).height() / 1)) {

    $('.eq-bar').each(function(i){

      setTimeout(function(){
        $('.eq-bar').eq(i).addClass('eq-on');
      },25* (i+1));
    });

  }

//Graphic-Design Reveal
  if(wScroll > $('.graphic-design p').offset().top - ($(window).height() / 1.2)) {

    $('.graphic-design p').each(function(i){

      setTimeout(function(){
        $('.graphic-design p').eq(i).addClass('gd-is-showing');
      }, 200 * (i+1));
    });

  }

  /*if(wScroll > $('.view-more-graphic-design-wrapper').offset().top - ($(window).height() / 1)) {

    $('.view-more-graphic-design-wrapper').each(function(i){

      setTimeout(function(){
        $('.view-more-graphic-design-wrapper').eq(i).addClass('graphic-design-page-button');
      }, 200 * (i+1));
    });

  }*/

//Web-Design Reveal
  /*if(wScroll > $('.view-more-web-design-wrapper').offset().top - ($(window).height() / 1)) {

    $('.view-more-web-design-wrapper').each(function(i){

      setTimeout(function(){
        $('.view-more-web-design-wrapper').eq(i).addClass('web-design-page-button');
      }, 200 * (i+1));
    });

  }*/

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
	            scrollTop: target.offset().top
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

//cinematographyPage
function cinematographyPage() {
  $('.view-more-cinematography-wrapper').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.cinematography-page, body').removeClass('is-open'); }
    else { $('.close-pop-up-botton, section.cinematography-page, body').addClass('is-open'); }
  });
}

function cinematographyPageClose() {
  $('.close-pop-up-botton').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.cinematography-page, .close-pop-up-botton, body').removeClass('is-open'); }
    else { $('section.cinematography-page, .close-pop-up-botton, body').removeClass('is-open'); }
  });
}

//photographyPage
function photographyPage() {
  $('.view-more-photography-wrapper').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.photography-page, body').removeClass('is-open'); }
    else { $('section.photography-page, .close-pop-up-botton, body').addClass('is-open'); }
  });
}

function photographyPageClose() {
  $('.close-pop-up-botton').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.photography-page, .close-pop-up-botton, body').removeClass('is-open'); }
    else { $('section.photography-page, .close-pop-up-botton, body').removeClass('is-open'); }
  });
}

//soundPage
function soundPage() {
  $('.view-more-sound-wrapper').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.sound-page, body').removeClass('is-open'); }
    else { $('section.sound-page, .close-pop-up-botton, body').addClass('is-open'); }
  });
}

function soundPageClose() {
  $('.close-pop-up-botton').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.sound-page, .close-pop-up-botton, body').removeClass('is-open'); }
    else { $('section.sound-page, .close-pop-up-botton, body').removeClass('is-open'); }
  });
}

//graphicPage
function graphicPage() {
  $('.view-more-graphic-design-wrapper').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.graphic-design-page, body').removeClass('is-open'); }
    else { $('section.graphic-design-page, .close-pop-up-botton, body').addClass('is-open'); }
  });
}

function graphicPageClose() {
  $('.close-pop-up-botton').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.graphic-design-page, .close-pop-up-botton, body').removeClass('is-open'); }
    else { $('section.graphic-design-page, .close-pop-up-botton, body').removeClass('is-open'); }
  });
}

//webPage
function webPage() {
  $('.view-more-web-design-wrapper').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.web-design-page, body').removeClass('is-open'); }
    else { $('section.web-design-page, .close-pop-up-botton, body').addClass('is-open'); }
  });
}

function webPageClose() {
  $('.close-pop-up-botton').on('click', function(){
    var status = $(this).hasClass('is-open');
    if(status){ $('section.web-design-page, .close-pop-up-botton, body').removeClass('is-open'); }
    else { $('section.web-design-page, .close-pop-up-botton, body').removeClass('is-open'); }
  });
}

$(function() {
  mobileNav();
  smoothScroll();
  navShrink();
  cinematographyPage();
  cinematographyPageClose();
  photographyPage();
  photographyPageClose();
  soundPage();
  soundPageClose();
  graphicPage();
  graphicPageClose();
  webPage();
  webPageClose();
});
