/*
Write a RegExp for a Canadian Postal Code, for example "M3J 3M6". Allow spaces or no spaces, capitals or lower case.
*/

function postalCodeValid(pCode) {
    let regex = /^[A-Za-z][0-9][A-Za-z][\s]?[0-9][A-Za-z][0-9]$/;

    if (regex.test(pCode)) {
        return true;
    }
    
    return false;
}

console.log(postalCodeValid("M3J 3M6"));
console.log(postalCodeValid("M3J3M6"));
console.log(postalCodeValid("m3j 3m6"));
console.log(postalCodeValid("m3J 3m6"));
console.log(postalCodeValid("3J 3M6"));
console.log(postalCodeValid("43J 3MD"));