var Math = function() { }

Math.prototype.dodawanie = function(a, b) {
	return a + b;
}

Math.prototype.odejmowanie = function(a, b) {
	return a - b;
}

Math.prototype.mnozenie = function(a, b) {
	return a * b;
}

Math.prototype.dzielenie = function(a, b) {
	return a / b;
}

Math.prototype.modulo = function(a, b) {
	return a % b;
}

module.exports = exports = Math;