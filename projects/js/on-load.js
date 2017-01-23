document.body.onload = function() {
  loadFont('https://fonts.googleapis.com/css?family=Open+Sans');
  $('.flashgame').forEach(function(el) {
    if(window.innerWidth < el.getAttribute('data-min-res')
        || mobileAndTabletCheck())
      el.style.display = 'none';
  });
}
