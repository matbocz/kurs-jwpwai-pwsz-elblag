var CHF = 3.90;
var EUR = 4.29;
var GBP = 5.01;
var USD = 3.89;
var CAD = 2.92;

function roundTwoDecimals(amount) {
	return Math.round(amount * 100) / 100;
}

exports.CHFToPLN = function(amount) {
	return roundTwoDecimals(amount * CHF);
}

exports.EURToPLN = function(amount) {
	return roundTwoDecimals(amount * EUR);
}

exports.GBPToPLN = function(amount) {
	return roundTwoDecimals(amount * GBP);
}

exports.USDToPLN = function(amount) {
	return roundTwoDecimals(amount * USD);
}

exports.CADToPLN = function(amount) {
	return roundTwoDecimals(amount * CAD);
}