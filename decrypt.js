fs = require('fs');
var caesar = require('./index')
var frenchGuesser = require('./french-guesser')

var text = fs.readFileSync('input.txt', 'utf8');
console.log(text);
var data = new Array();

for (var i = 1; i < 26; i++) {
	data.push(caesar.decrypt(i, text));
}

console.log(frenchGuesser.guessFromArray(data));