$(function(){

  $('.rate-star').rateYo({
    rating: 4.5,
    starWidth: "16px",
    readOnly: true
  });

  $('.slider__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.png" alt=""></button>'
  });

  $('.followers-slider__inner').slick({
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/icons/chevron-left.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/icons/chevron-right.png" alt=""></button>',
    slidesToShow: 3,
    slidesToScroll: 3
  });

  $('.feedback__slider').slick({
    prevArrow: '<button class="lnr lnr-chevron-left"></button>',
    nextArrow: '<button class="lnr lnr-chevron-right"></button>',
    slidesToShow: 2,
    slidesToScroll: 2
  });


  var mixer = mixitup('.newest__inner-box');
  
});