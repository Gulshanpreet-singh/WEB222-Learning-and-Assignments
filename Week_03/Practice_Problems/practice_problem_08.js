/*
Write a function checkAges that takes two arguments: an Array of ages (Number); and a cut-off age (Number). Your function should return true if all of the ages in the Array are at least as old as the cut-off age: checkAges([16, 18, 22, 32, 56], 19) should return false and checkAges([16, 18, 22, 32, 56], 6) should return true. Bonus: try to rewrite your code using the Array’s every() method.
*/

function checkAges(ageArr, cutoff) {
    for (let age of ageArr) {
        if (age < cutoff) {
            return false;
        }
    }
    return true;
}

console.log(checkAges([16, 18, 22, 32, 56], 19));
console.log(checkAges([16, 18, 22, 32, 56], 6));