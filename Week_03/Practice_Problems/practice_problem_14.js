/*
Write a function that takes a password String, and validates it according to the following rules: must be between 8-32 characters in length; must contain one Capital Letter; must contain one Number; must contain one Symbol (!@#$%^&*-+{}). Return true if the given password is valid, otherwise false.
*/

function checkPassword(inputString) {
    let capitalRegex = /[A-Z]+/;
    let symbolRegex = /[!@#$%^&*-+{}]+/;
    let numberRegex = /[0-9]+/;
    
    if (capitalRegex.test(inputString) && symbolRegex.test(inputString) && numberRegex.test(inputString) && (inputString.length >= 8 && inputString.length <= 32)) {
        return true;
    }

    return false;
}

console.log(checkPassword("PASword1#"));
console.log(checkPassword("P1#4"));
console.log(checkPassword("$fghdfdA23"));