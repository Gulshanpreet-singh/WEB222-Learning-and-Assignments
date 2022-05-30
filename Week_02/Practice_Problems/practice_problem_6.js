/*
Function allowing any number of arguments (Numbers), returning their sum: sum(1, 2, 3) should return 6.
*/

function sum(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    return sum;
}


console.log(sum(1, 2, 3));