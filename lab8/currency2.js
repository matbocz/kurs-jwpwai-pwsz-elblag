var Currency = function(CHF, EUR, GBP, USD, CAD) {
	this.CHF = CHF;
	this.EUR = EUR;
	this.GBP = GBP;
	this.USD = USD;
	this.CAD = CAD;
}

Currency.prototype.roundTwoDecimals = function(amount) {
	return Math.round(amount * 100) / 100;
}

Currency.prototype.CHFToPLN = function(amount) {
	return this.roundTwoDecimals(amount * this.CHF);
}

Currency.prototype.EURToPLN = function(amount) {
	return this.roundTwoDecimals(amount * this.EUR);
}

Currency.prototype.GBPToPLN = function(amount) {
	return this.roundTwoDecimals(amount * this.GBP);
}

Currency.prototype.USDToPLN = function(amount) {
	return this.roundTwoDecimals(amount * this.USD);
}

Currency.prototype.CADToPLN = function(amount) {
	return this.roundTwoDecimals(amount * this.CAD);
}

module.exports = exports = Currency;