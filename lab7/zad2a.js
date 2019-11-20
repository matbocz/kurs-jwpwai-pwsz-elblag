var fs = require("fs");
var data = fs.readFileSync('package.json');
console.log("Początek skryptu.");
console.log(data.toString());
console.log("Koniec skryptu.");