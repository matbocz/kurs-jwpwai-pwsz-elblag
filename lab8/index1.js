console.log('Referencja do obiektu');
var currency1 = require('./currency1');

console.log('50 CHF to: ' + currency1.CHFToPLN(50) + ' PLN.');
console.log('50 EUR to: ' + currency1.EURToPLN(50) + ' PLN.');
console.log('50 GBP to: ' + currency1.GBPToPLN(50) + ' PLN.');
console.log('50 USD to: ' + currency1.USDToPLN(50) + ' PLN.');
console.log('50 CAD to: ' + currency1.CADToPLN(50) + ' PLN.');


console.log('Podejście obiektowe');
var Currency = require('./currency2');

var CHF = 3.90;
var EUR = 4.29;
var GBP = 5.01;
var USD = 3.89;
var CAD = 2.92;

var currency2 = new Currency(CHF, EUR, GBP, USD, CAD);

console.log('50 CHF to: ' + currency2.CHFToPLN(50) + ' PLN.');
console.log('50 EUR to: ' + currency2.EURToPLN(50) + ' PLN.');
console.log('50 GBP to: ' + currency2.GBPToPLN(50) + ' PLN.');
console.log('50 USD to: ' + currency2.USDToPLN(50) + ' PLN.');
console.log('50 CAD to: ' + currency2.CADToPLN(50) + ' PLN.');