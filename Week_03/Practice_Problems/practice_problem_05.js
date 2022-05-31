/*
Write a function tidy that takes an Array of Strings and uses the array’s map() method to create and return a new Array with each element having all leading/trailing whitespace removed: tidy([' hello', ' world ']) should return ['hello', 'world'].
*/

function tidy(arr) {
    let tidyArr = arr.map(element => element.trim());
    return tidyArr;
}

console.log(tidy([' hello', ' world ']));