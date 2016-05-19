var CANVAS = CANVAS || {};

var ctx = document.getElementById('canvas').getContext('2d');
ctx.fillStyle = '#000000';
ctx.lineWidth = 1;

var drawLevel = [];
drawLevel[0] = function() {
  ctx.moveTo(0, CANVAS.h * 0.9);
  ctx.lineTo(CANVAS.w, CANVAS.h * 0.9);
  ctx.stroke();
};
