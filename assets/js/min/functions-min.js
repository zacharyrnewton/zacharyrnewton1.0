function mobileNav(){$(".mobile-nav-toggle").on("click",function(){var o=$(this).hasClass("is-open");o?$(".mobile-nav-toggle, .mobile-nav").removeClass("is-open"):$(".mobile-nav-toggle, .mobile-nav").addClass("is-open")})}function smoothScroll(o){$('a[href^="#"]').on("click",function(e){var n=$($(this).attr("href"));n.length&&(e.preventDefault(),$("html, body").animate({scrollTop:n.offset().top-89},o))})}function navShrink(){$('a[href^="#"]').on("click",function(){$(".mobile-nav-toggle, .mobile-nav, section.cinematography-page, section.photography-page, section.sound-page, section.graphic-design-page, section.web-design-page, .close-pop-up-botton, body").removeClass("is-open")})}$(window).scroll(function(){var o=$(this).scrollTop();$("#tagline").css({transform:"translate(0px, "+o/3+"%)"});var e=0,n=500,t=$("#tagline");$(window).bind("scroll",function(){var o=$(document).scrollTop(),i=0;e>=o?i=1:n>=o&&(i=1-o/n),t.css("opacity",i)}),o>$(".you-tube-badge").offset().top-$(window).height()/1.2&&$(".you-tube-badge").each(function(o){setTimeout(function(){$(".you-tube-badge").eq(o).addClass("is-pulsed")},200*(o+1))}),o>$(".videos-cont").offset().top-$(window).height()/1.1&&$(".videos-cont").each(function(o){setTimeout(function(){$(".videos-cont").eq(o).addClass("vid-slide")},200*(o+1))}),$(document).ready(function(){$(".youtube_thumb").on("click",function(o){$(".youtube_thumb").css({display:"none"}),$("#youtube").css({display:"block"}),$("#youtube")[0].src+="&autoplay=1",o.preventDefault()})}),o>$(".ig-button").offset().top-$(window).height()/1.1&&$(".ig-button").each(function(o){setTimeout(function(){$(".ig-button").eq(o).addClass("animate")},200*(o+1))}),o>$(".eq-bar").offset().top-$(window).height()/1&&$(".eq-bar").each(function(o){setTimeout(function(){$(".eq-bar").eq(o).addClass("eq-on")},25*(o+1))}),o>$(".web-build-container").offset().top-$(window).height()/1&&$(".web-design a.web-build").each(function(o){setTimeout(function(){$(".web-design a.web-build").eq(o).addClass("wb-is-showing")},200*(o+1))})}),$(window).scroll(function(){var o=document.getElementsByClassName("eq-bar");[].forEach.call(o,function(o){o.style.height=100*Math.random()+"%"})}),$(function(){mobileNav(),smoothScroll(),navShrink()});