module.exports = function () {

  // begin Slick slider

  $('.gallery__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
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

  $('.partners__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 861,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 651,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 436,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  // end Slick slider

};