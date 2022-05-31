/*
A String contains a Key/Value pair separated by a ":". Using String methods, how would you extract the two parts? Make sure you also deal with any extra spaces. For example, all of the following should be considered the same: "colour: blue", "colour:blue", "colour : blue", "colour: blue ". Bonus: how could you use a RegExp instead?
*/

// Using string methods
function seperate(inputString) {
    let sepArr = inputString.split(':');
    sepArr = sepArr.map(element => element.trim());
    return sepArr;
}

// Using regular expressions
function seperate(inputString) {
    let regex = /[A-Za-z]+/g;
    console.log(inputString.match(regex));
}

console.log(seperate("colour: blue"));
console.log(seperate("colour:blue"));
console.log(seperate("colour : blue"));
console.log(seperate("colour: blue "));