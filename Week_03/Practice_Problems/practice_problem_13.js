/*
Write a function that takes a String and checks whether or not it begins with one of "Mr.", "Mrs.", or "Ms.". Return true if it does, otherwise false. Bonus: try writing your solution using regular String methods and again as a RegExp.
*/

// Using string methods
function start(input) {
    if (input.startsWith("Mr.") || input.startsWith("Mrs.") || input.startsWith("Ms.")) {
        return true;
    }
    return false;
}

// Using regular expressions
function start(input) {
    let regex = /^(Mr\.|Mrs\.|Ms\.)/;

    if (regex.test(input)) {
        return true;
    }

    return false;
}

console.log(start("Mr. Aryan"));
console.log(start("Mrs. Mandita"));
console.log(start("Ms. Kenisha"));
console.log(start("Aryan"));
console.log(start("Kenisha"));