$(function() {

  $('.home-slider').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.counter__pages-text_bold').text(i.toString().padStart(2, '0'));
    $('.counter__pages-text').text('/' + slick.slideCount.toString().padStart(2, '0'));
});


  $('.home-slider').slick({
    arrows: true,
    prevArrow: $('.button-slder_prev'),
    nextArrow: $('.button-slder_next'),
    fade: true
  });

  //about-complex slider
  $('.about-complex-slider-info').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'about-complex-slider-dots',
    asNavFor: $('.about-complex-slider-picture')
  });

  $('.about-complex-slider-picture').slick({
    arrows: false,
    asNavFor: $('.about-complex-slider-info')
  });

  //about-company slider
  $('.about-company-slider-info').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'about-company-slider-dots',
    asNavFor: $('.about-company-slider-picture')
  });

  $('.about-company-slider-picture').slick({
    arrows: false,
    asNavFor: $('.about-company-slider-info')
  });

  //room sliders
  $('.room-slider').each(function() {
    $(this).slick({
      arrows: true,
      infinite: true,
      nextArrow: $(this).closest('.room-sliders__item').find('.button-slider-square_next'),
      prevArrow: $(this).closest('.room-sliders__item').find('.button-slider-square_prev'),
    });
    
  });
  
  //gallery-slider
  $('.gallery-slider').slick({
    nextArrow: $('.gallery__body-slider-buttons .button-slider-square_next'),
    prevArrow: $('.gallery__body-slider-buttons .button-slider-square_prev'),
  });

  //profit-slider
  $('.profit-slider-info').slick({
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: 'profit-slider-dots',
    asNavFor: $('.profit-slider-picture')
  });

  $('.profit-slider-picture').slick({
    arrows: false,
    asNavFor: $('.profit-slider-info')
  });

  //down-payment-slider
  var numeral = require('numeral');
  var handle = $( ".down-payment .down-payment__current" );
  $( "#down-payment-slider" ).slider({
    range: "min",
    value: 810653,
    min: 0,
    max: 5000000,
    create: function() {
      handle.text( numeral($( this ).slider( "value")).format('0,0'));
    },
    slide: function( event, ui ) {
      handle.text( numeral(ui.value).format('0,0'));
    }
  });

  //credit-term-slider
  var handle2 = $( ".credit-term .credit-term__current" );
  $( "#credit-term-slider" ).slider({
    range: "min",
    value: 5,
    min: 0,
    max: 40,
    create: function() {
      handle2.text( $( this ).slider( "value"));
    },
    slide: function( event, ui ) {
      handle2.text( ui.value);
    }
  });

  //percent-rate-slider
  var handle3 = $( ".percent-rate .percent-rate__current" );
  $( "#percent-rate-slider" ).slider({
    range: "min",
    value: 3.5,
    min: 0,
    max: 20,
    step: 0.1,
    create: function() {
      handle3.text( $( this ).slider( "value"));
    },
    slide: function( event, ui ) {
      handle3.text( ui.value);
    }
  });

});
