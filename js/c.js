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

