/*
Function that takes a Function followed by any number of Numbers, and applies the function to all the numbers, returning the total: applyFn(function(x) { return x * x;}, 1, 2, 3) should return 14.
*/

function applyFn() {
    let returnVal = 0;
    for (let i = 1; i < arguments.length; i++) {
        returnVal += arguments[0](arguments[i]);
    }
    return returnVal;
}

console.log(applyFn(function(x) { return x * x;}, 1, 2, 3));