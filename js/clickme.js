function styleClickmes() {
  $('[data-opens]').addClass('clickme');
  $('[data-openedby]').addClass('off');
}

$('[data-opens').click(function() {
  var openedby = $(this).attr('data-opens');
  $(this).removeClass('clickme');
  $(this).addClass('clicked');
  $('[data-openedby=' + openedby + ']').removeClass('off');
  $('[data-closedby=' + openedby + ']').addClass('off');
});

styleClickmes();
