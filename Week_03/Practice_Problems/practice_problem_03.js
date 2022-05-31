/*
Write a function buildArray that takes two Numbers, and returns an Array filled with all numbers between the given number: buildArray(5, 10) should return [5, 6, 7, 8, 9, 10]
*/

function buildArray(lower, upper) {
    let arr = [];
    for (let i = lower; i <= upper; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(buildArray(5, 10));