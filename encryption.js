var phrase = window.prompt("Type out the phrase you wish to encrypt:");

//remove punctuation from phrase
phrase = phrase.replace(/[^\w\s]|_/g, "");
//remove spaces from phrase
phrase = phrase.replace(/\s+/g, '');
//make phrase lowercase
phrase = phrase.toLowerCase();

//count string length as new variable 'stringLength'
var stringLength = phrase.length;
//Round square root of 'stringLength' to nearest whole number as new variable 'sqrt'
var sqrt = Math.round(Math.sqrt(stringLength));

/*
//slice up 'newphrase' variable and output encrypted phrase words separated by spaces.
console.log(phrase.slice(0, sqrt),phrase.slice(sqrt, sqrt*2),phrase.slice(sqrt*2, sqrt*3),phrase.slice(sqrt*3, sqrt*4),phrase.slice(sqrt*4, sqrt*5),phrase.slice(sqrt*5, sqrt*6),phrase.slice(sqrt*6, sqrt*7),phrase.slice(sqrt*8, sqrt*9));
*/
