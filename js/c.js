$('#k').addClass('off');
$('#j').addClass('off');
$('#ship').hide();

$('#fine').click(function(){
  $('body').css('background-color', '#000000');
  $('#ship').show();

  $(document).mousemove(function(e){
    $('#ship').css({left:e.pageX - 80, top:e.pageY - 50});
  });

});

var shipT = 0;
var shipL = 0;

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
  $('#k').removeClass('off');
});

cheet('c a n c e r', function() {
  $('#j').removeClass('off');
});

cheet('t o p k e k', function() {
  document.body.style.backgroundImage = 'url(img/c/raulcajeta.jpg)';
});

document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == '38') {
    shipT -= 5
  }
  else if (e.keyCode == '40') {
    shipT += 5
  }
  else if (e.keyCode == '37') {
    shipL -= 5
  }
  else if (e.keyCode == '39') {
    shipL += 5
  }
}
