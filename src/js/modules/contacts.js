module.exports = function () {

  // begin contacts
  $('.info-btn').on('click', function () {
    $('#header__contacts').addClass('active');
    $('.main-wrap').addClass('no-scroll');
  });

  $('.header__contacts-close').on('click', function () {
    $('#header__contacts').removeClass('active');
    $('.main-wrap').removeClass('no-scroll');
  })
  // end contacts

};