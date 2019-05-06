document.body.onload = function() {
  loadFont('https://fonts.googleapis.com/css?family=Open+Sans');
  styleClickmes();
  setUpModal();
  if(window.location.hash == "#projects") {
    document.getElementById('projects-modal').style.display = 'block';
  }
  $('#projects-btn')[0].href = '#projects';
}
