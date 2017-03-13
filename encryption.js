var phrase = window.prompt("Type out the phrase you wish to encrypt:");

//remove punctuation from phrase
phrase = phrase.replace(/[^\w\s]|_/g, "");
//remove spaces from phrase
phrase = phrase.replace(/\s+/g, '');
