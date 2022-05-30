/*
Function that takes any number of arguments (Numbers), and returns them in reverse order, concatenated together as a String: flip(1, 2, 3) should return "321"
*/

function flip(...numbers) {
    let rev = '';
    for (let i = numbers.length - 1; i >= 0; i--) {
        rev += String(numbers[i]);
    }
    return rev;
}

console.log(flip(1, 2, 3));