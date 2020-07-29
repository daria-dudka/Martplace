$(function(){

  $('.rate-star').rateYo({
    starWidth: "15px",
    spacing: "3px",
    readOnly: true
  });
  $('.item-card__rate-star').rateYo({
    starWidth: "13px",
    spacing: "4px",
    readOnly: true
  });

  $('.weekly__slider').slick({
    prevArrow: '<button class="slick-arrow slick-prev" type="button"></button>',
    nextArrow: '<button class="slick-arrow slick-next" type="button"></button>',
    appendArrows: '.weekly__slider-buttons'
  });

  $('.followers-slider__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev" type="button"></button>',
    nextArrow: '<button class="slick-arrow slick-next" type="button"></button>',
    appendArrows: '.followers-slider__slider-buttons',
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('.feedback__slider').slick({
    prevArrow: '<button class="lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="lnr lnr-chevron-right"></button>',
    slidesToShow: 2,
    slidesToScroll: 2
  });


  var mixer = mixitup('.newest__inner');
  
});