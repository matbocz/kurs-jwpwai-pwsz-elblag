console.log('Referencja do obiektu');
var math1 = require('./math1');

console.log('4 + 3 = ' + math1.dodawanie(4, 3));
console.log('4 - 3 = ' + math1.odejmowanie(4, 3));
console.log('4 * 3 = ' + math1.mnozenie(4, 3));
console.log('4 / 3 = ' + math1.dzielenie(4, 3));
console.log('4 % 3 = ' + math1.modulo(4, 3));


console.log('Podejście obiektowe');
var Math = require('./math2');

var math2 = new Math();

console.log('4 + 3 = ' + math2.dodawanie(4, 3));
console.log('4 - 3 = ' + math2.odejmowanie(4, 3));
console.log('4 * 3 = ' + math2.mnozenie(4, 3));
console.log('4 / 3 = ' + math2.dzielenie(4, 3));
console.log('4 % 3 = ' + math2.modulo(4, 3));