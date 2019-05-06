/**
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2016, 2017, 2019  Javier Rizzo-Aguirre
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

$('#cc')[0].innerHTML = '<p id="ck">Of course you tried <a data-opens="8">that</a>.<span data-openedby="8"> <a data-opens="9">What?</a></span><span data-openedby="9"> You expected a cool <a data-opens="10">easter egg</a>?</span><span data-openedby="10"> <a id="kf" href="#">Fine</a>.</span></p><p id="cj">Juan Ramón Peña Jr. Gutiérrez is gay.</p>';
document.body.innerHTML += '<div id="ship"><a href="https://en.wikipedia.org/wiki/Gradius_(video_game)"><img src="img/c/ship.png" alt="Ship" /></a></div>';

(function() {
	if (typeof NodeList.prototype.forEach === "undefined") {
		NodeList.prototype.forEach = Array.prototype.forEach;
	}
	if (typeof HTMLCollection.prototype.forEach === "undefined") {
		HTMLCollection.prototype.forEach = Array.prototype.forEach;
	}
})();

cheet('↑ ↑ ↓ ↓ ← → ← → b a', function() {
	$('#ck').forEach(function(el) {el.style.display = 'block';});
});

cheet('c a n c e r', function() {
	$('#cj').forEach(function(el) {el.style.display = 'block';});
});

cheet('t o p k e k', function() {
	document.body.style.backgroundImage = 'url(img/c/raulcajeta.jpg)';
});

$('#kf').forEach(function(el) {el.onclick = function(){
	document.body.style.backgroundColor = '#000';
	$('#ship').forEach(function(el) {el.style.display = 'block';});
};});

window.onmousemove = function(e) {
	$('#ship').forEach(function(el) {
		el.style.top = e.clientY - 50 + "px";
		el.style.left = e.clientX - 80 + "px";
	});
};
