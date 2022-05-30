/*
Function allowing any number of arguments of any type, returns true only if none of the arguments is falsy. allExist(true, true, 1) should return true, but allExist(1, "1", 0) should return false.
*/

function allExist(...numbers) {
    let f = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (!numbers[i]) {
            f++;
        }
    }

    if (f > 0) {
        return false;
    }
    return true;
}

console.log(allExist(true, true, 1));
console.log(allExist(1, "1", 0));