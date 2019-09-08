// begin popup open
$('.popup-open').on('click', function(e) {
  e.preventDefault();
  $('.popup, .popup__layer').fadeIn();
});

$('.order__success').on('click', function(e) {
  e.preventDefault();
  $('.popup').fadeOut();
  $('.popup-success').fadeIn();
});
// end popup open

// begin popup close
$('.popup__layer, .popup__close, .order__close').on('click', function() {
  $('.popup, .popup-success, .popup__layer').fadeOut();
});
// end popup close