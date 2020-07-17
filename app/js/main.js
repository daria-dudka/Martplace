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


  var mixer = mixitup('.newest__inner-box');
  
});