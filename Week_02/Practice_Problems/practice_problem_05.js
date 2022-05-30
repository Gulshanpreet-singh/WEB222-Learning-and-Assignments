/*
Function taking any number of arguments (Numbers), returning true if they are all less than 50: isUnder50(1, 2, 3, 5, 4, 65) should return false.
*/

function isUnder50(...numbers) {
    let greaterThan50 = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 50) {
            greaterThan50++;
        }
    }

    if (greaterThan50 === 0) {
        return true;
    }
    return false;
}


console.log(isUnder50(1, 2, 3, 5, 4, 65));
console.log(isUnder50(1, 2, 3, 5, 4, 49));