document.body.onload = function() {
  loadFont('https://fonts.googleapis.com/css?family=Open+Sans');
  styleClickmes();
  if(window.location.hash == "#projects") {
    modal.style.display = 'block';
  }
}
