document.body.onload = function() {
  loadFont('https://fonts.googleapis.com/css?family=Open+Sans');
  if(mobileAndTabletCheck()) {
    $('.flashgame').forEach(function(el) {
      if(window.innerWidth < el.getAttribute('data-min-res'))
        el.style.display = 'none';
    });
  }
}
