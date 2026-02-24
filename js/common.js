"use strict";

var scroll = false;
$(document).ready(function () {
  $('.menu-toggle, .menu-close, .menu-backdrop').click(function () {
    $('body').toggleClass('menu-opened');
    return false;
  });
  $('.page-wrap').click(function () {
    $('body').removeClass('menu-opened');
  });
  AOS.init({
    duration: 700
  });
  $(".paroller, [data-paroller-factor]").each(function () {
    $(this).paroller({
      factor: $(this).data('factor'),
      type: 'foreground',
      direction: 'vertical',
      transition: 'transform 0.8s'
    });
  });
  $('a[href^="#"]').not('[data-target]').not('[href^="mailto"]').not('[data-fancybox]').click(function () {
    if ($(this).attr('href') !== "#" && $($(this).attr('href')).length && !$(this).hasClass('week-nav-item')) {
      //$('body, html').animate({scrollTop: $($(this).attr('href')).offset().top - $('.header').innerHeight() - 30}, 500);
      scroll.scrollTo($(this).attr('href'), {
        offset: -80
      });
      $('body').removeClass('menu-opened');
      return false;
    }
  });
  $('a[href^="/#"]').click(function () {
    var link = $(this).attr('href').replace('/', '');
    if (link !== "#" && $(link).length) {
      $('body, html').animate({
        scrollTop: $(link).offset().top - $('.header').innerHeight()
      }, 500);
      $('body').removeClass('menu-opened');
      return false;
    }
    return false;
  });
  var photo_slider = [];
  $('.photo-slider').each(function () {
    var block = $(this);
    var s = $(this).find('.swiper').get(0);
    photo_slider.push(new Swiper(s, {
      speed: 800,
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    }));
  });
  $('.faq-title').click(function () {
    $(this).parent().toggleClass('active');
    $(this).next().stop(true).slideToggle("fast");
  });
  $('[data-fancybox=""]').fancybox({
    autoFocus: false
  });
  $(window).trigger('resize');
});
var art_slider = [];
function init_art_slider() {
  if (window.innerWidth > 768 && art_slider.length > 0) {
    console.log(art_slider.length);
    art_slider.forEach(function (item) {
      item.destroy();
    });
    art_slider.length = 0;
  } else if (window.innerWidth <= 768 && art_slider.length == 0) {
    var i = 0;
    $('.art-slider').each(function () {
      var block = $(this);
      var s = $(this).find('.swiper').get(0);
      art_slider.push(new Swiper(s, {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 32,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination"
        }
      }));
    });
  }
}
window.addEventListener('load', init_art_slider);
window.addEventListener('resize', init_art_slider);