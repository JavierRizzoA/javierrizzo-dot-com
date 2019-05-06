/**
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2016, 2017, 2019 Javier Rizzo-Aguirre
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

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

document.head.innerHTML += '<style>.initially-hidden {display: none;}</style>';
