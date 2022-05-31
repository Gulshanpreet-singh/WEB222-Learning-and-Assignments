/*
Write a function addDollars that takes an Array of Numbers and uses the array’s map() method to create and return a new Array with each element having a $ added to the front: addDollars([1, 2, 3, 4]) should return ['$1', '$2', '$3', '$4']
*/

function addDollars(dollarArray) {
    // Method 1
    let arr = dollarArray.map(element => '$' + element);
    return arr;
    
    // Method 2
    let arr = [];
    dollarArray.forEach(element => arr.push('$' + element));
    return arr;
}

console.log(addDollars([1, 2, 3, 4]));