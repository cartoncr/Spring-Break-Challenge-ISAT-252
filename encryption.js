//"We must let go of the life we have planned, so as to accept the one that is waiting for us."
var phrase = window.prompt("Type out the phrase you wish to encrypt:");
if (phrase === "") {
	console.log("Your phrase was empty. Please enter a valid phrase.")
} else {
	//remove punctuation from phrase
	phrase = phrase.replace(/[^\w\s]|_/g, '');
	//remove spaces from phrase
	phrase = phrase.replace(/\s+/g, '');
	//make phrase lowercase
	phrase = phrase.toLowerCase();
	//count string length as new variable 'stringLength'
	var stringLength = phrase.length;
	//Round square root of 'stringLength' to nearest whole number as new variable 'sqrt'
	var sqrt = Math.round(Math.sqrt(stringLength));

	//split phrase into an arrary
	var phraseArray = phrase.match(new RegExp('.{1,' + sqrt + '}', 'g'));
	console.log(phraseArray);
/*
	var newPhrase = //create square table of characters using 'sqrt' value for number of theoretical columns/rows

	//slice up 'newPhrase' variable and output encrypted phrase words separated by spaces.
	console.log(phrase.slice(0, sqrt),phrase.slice(sqrt, sqrt*2),phrase.slice(sqrt*2, sqrt*3),phrase.slice(sqrt*3, sqrt*4),phrase.slice(sqrt*4, sqrt*5),phrase.slice(sqrt*5, sqrt*6),phrase.slice(sqrt*6, sqrt*7),phrase.slice(sqrt*8, sqrt*9),phrase.slice(sqrt*9, sqrt*10),phrase.slice(sqrt*10, sqrt*11),phrase.slice(sqrt*11, sqrt*12));
*/
}
