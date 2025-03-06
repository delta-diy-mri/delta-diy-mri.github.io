// Original code from user dizel3d on stackoverflow: https://stackoverflow.com/a/26129950

$(document).on('click', 'a[href^="#"]', function(e) {
  $(window).scroll();
  // target element id
  var id = $(this).attr('href');

  // target element
  var $id = $(id);
  if ($id.length === 0) {
    return;
  }

  // prevent standard hash navigation (avoid blinking in IE)
  e.preventDefault();

  // top position relative to the document
  var pos = $id.offset().top;

  // animated top scrolling
  $('body, html').animate({scrollTop: pos});
});
