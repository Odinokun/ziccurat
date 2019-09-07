module.exports = function () {

  // begin contacts
  $('.menu__item-svg').on('click', function () {
    $(this).siblings('.menu__sublist').slideToggle();
  });

  $('.burger input').on('click', function () {
    $('#menu').slideToggle();
  })
  // end contacts

};