/*
 * The MIT License
 * 
 * Copyright (c) 2016 Javier Rizzo
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

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
