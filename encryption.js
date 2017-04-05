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
*/
}
