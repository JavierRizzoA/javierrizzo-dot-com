var CANVAS = CANVAS || {};

$(document).ready(function() {
  $('#canvas').width($(window).width());
  $('#canvas').height($(window).height() - $('nav').outerHeight(true)- $('#footer').outerHeight(true));
  CANVAS.w = $('#canvas').width();
  CANVAS.h = $('#canvas').height();
  drawLevel[0]();
});

$(window).resize(function() {
  $('#canvas').width($(window).width());
  $('#canvas').height($(window).height() - $('nav').outerHeight(true)- $('#footer').outerHeight(true));
  CANVAS.w = $('#canvas').width();
  CANVAS.h = $('#canvas').height();
});
