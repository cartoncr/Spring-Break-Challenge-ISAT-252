var phrase = window.prompt("Type out the phrase you wish to encrypt:");

//remove spaces from phrase
document.write(str = str.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " "));
