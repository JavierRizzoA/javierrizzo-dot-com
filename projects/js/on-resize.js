document.body.onresize = function(event) {
  console.log('res');
  if(!mobileAndTabletCheck()) {
    $('flashgame').forEach(function(el) {
      if(window.innerWidth < el.getAttribute('data-min-res'))
        el.style.display = 'none';
      else
        el.style.display = 'block';
    });
  }
}
