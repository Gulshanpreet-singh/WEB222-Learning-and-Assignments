/*
Check if a number is between two other numbers, being inclusive if the final argument is true: checkBetween(66, 1, 50, true) should return false.
*/

function checkBetween(...numbers) {
    let lower = (numbers[2] < numbers[0]) ? numbers[2] : numbers[0];
    let upper = (numbers[2] > numbers[0]) ? numbers[2] : numbers[0];
    if (numbers[3] === 'true') {
        if (numbers[1] > lower && numbers[1] < upper) {
            return true;
        }
    }
    else {
        if (numbers[1] >= lower && numbers[1] <= upper) {
            return true;
        }
    }

    return false;
}

console.log(checkBetween(66, 1, 50, true));