module.exports = function() {

  // begin Slick slider

  $('.gallery__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots:false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // end Slick slider

};