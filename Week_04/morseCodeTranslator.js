// Object to provide lookup of morse code (value) for a given letter (key).
var alpha = {
    // define the mapping here as a literal
    A: '.-',
    B: '-...',
    C: '-.-.',
    D: '-..',
    E: '.',
    F: '..-.',
    G: '--.',
    H: '....',
    I: '..',
    J: '.---',
    K: '-.-',
    L: '.-..',
    M: '--',
    N: '-.',
    O: '---',
    P: '.--.',
    Q: '--.-',
    R: '.-.',
    S: '...',
    T: '-',
    U: '..-',
    V: '...-',
    W: '.--',
    X: '-..-',
    Y: '-.--',
    Z: '--..',
    ' ': '/'
};

// Object to provide lookup of letter (value) for a given morse code (key).
var morse = {
    '.-': 'A',
    '-...': 'B',
    '-.-.': 'C',
    '-..': 'D',
    '.': 'E',
    '..-.': 'F',
    '--.': 'G',
    '....': 'H',
    '..': 'I',
    '.---': 'J',
    '-.-': 'K',
    '.-..': 'L',
    '--': 'M',
    '-.': 'N',
    '---': 'O',
    '.--.': 'P',
    '--.-': 'Q',
    '.-.': 'R',
    '...': 'S',
    '-': 'T',
    '..-': 'U',
    '...-': 'V',
    '.--': 'W',
    '-..-': 'X',
    '-.--': 'Y',
    '--..': 'Z',
    '/': ' '
};

// Hint: use the [] operator to specify these special key values rather than a literal.

// Return `true` if all characters are morse code.  Use a RegExp. 
function isMorse(characters) {
    let regex = /^[.\-/ ]*$/;
    return regex.test(characters);
}

// Return `true` if all characters are part of the alphabet defined in `alpha`.  Use a RegExp.
// Bonus: can you rewrite it using `Object.keys()` and your `alpha` Object instead?
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys 
function isAlpha(characters) {
    let regex = /^[A-Z ]*$/;
    return regex.test(characters);
}

// Given an alphabet message, convert and return in morse code.  Use your morse and/or alpha object.
// Return undefined if text is not alpha.
function textToMorse(text) {
    function convertWordToMorse(word) {
        let morse = '';
        for (let i = 0; i < word.length; i++) {
            let letter = word.charAt(i);
            morse += alpha[letter] + ' ';
        }

        return morse.trim();
    }

    text = text.toUpperCase();
    let words = text.split(' ');
    let morseArr = words.map(word => convertWordToMorse(word));

    return morseArr.join('/');
}

// Given a morse code message, convert and return in text.  Use your morse and/or alpha object.
// Return undefined if morse is not proper code.
function morseToText(morseText) {
    function convertMorseToWord(morseWord) {
        morseWord = morseWord.split(' ');
        let lettersArr = morseWord.map(element => morse[element]);
        return lettersArr.join('');
    }

    let morseWords = morseText.split('/');
    let textArr = morseWords.map(element => convertMorseToWord(element));
    return textArr.join(' ');
}

// Constructor function that takes a `message` (String), which can be either morse or alpha.
// Use your functions above to decide how to store a value for `any` on `this`  
function Message(any) {
    this.msg = any.toUpperCase();
}

// Return the message as morse code, converting if necessary
Message.prototype.toMorse = function() {
    if (isMorse(this.msg)) {
        return this.msg;
    }
    return textToMorse(this.msg);
};

// Return the message as alpha characters, converting if necessary
Message.prototype.toAlpha = function() {
    if (isAlpha(this.msg)) {
        return this.msg;
    }

    return morseToText(this.msg);
};


var msg1 = new Message('--- -... .--- . -.-. - .../.. -./.--- .- ...- .- ... -.-. .-. .. .--. -/.- .-. ./...- . .-. -.--/.--. --- .-- . .-. ..-. ..- .-..');
console.log(msg1.toAlpha());
console.log(msg1.toMorse());

var msg2 = new Message('I am learning how to use Objects in JavaScript');
console.log(msg2.toMorse());
console.log(msg2.toAlpha());