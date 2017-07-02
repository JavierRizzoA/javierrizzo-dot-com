(function() {
    if (typeof NodeList.prototype.forEach === "undefined") {
        NodeList.prototype.forEach = Array.prototype.forEach;
    }
    if (typeof HTMLCollection.prototype.forEach === "undefined") {
        HTMLCollection.prototype.forEach = Array.prototype.forEach;
    }
})();

function styleClickmes() {
  $('[data-opens]').forEach(function(el) {
    el.classList.add('clickme');
    el.onclick = function() {
      var ob = el.getAttribute('data-opens');
      el.classList.remove('clickme');
      el.classList.add('clicked');
      document.querySelectorAll('[data-openedby="' + ob + '"]').forEach(
          function(el) {el.style.display = 'inline';
          });
      document.querySelectorAll('[data-closedby="' + ob + '"]').forEach(
          function(el) {el.style.display = 'none';});
    };
  });
  $('[data-openedby]').forEach(function(el) {el.style.display = 'none';});
  $('.initially-hidden').forEach( function(el) {
    el.classList.remove('initially-hidden');
  });
}
