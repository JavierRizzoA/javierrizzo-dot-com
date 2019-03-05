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
