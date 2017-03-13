var phrase = window.prompt("Type out the phrase you wish to encrypt:");

//remove punctuation from phrase
phrase = phrase.replace(/[^\w\s]|_/g, "");
//remove spaces from phrase
phrase = phrase.replace(/\s+/g, '');
//make phrase lowercase
phrase = phrase.toLowerCase();

//count string length as new variable 'stringLength'
stringLength = phrase.length;
//Round square root of 'stringLength' to nearest whole number
Math.round(Math.sqrt(stringLength));
