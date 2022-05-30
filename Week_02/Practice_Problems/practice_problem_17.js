/*
Function that returns the number of matches found for the first argument in the remaining arguments: findMatches(66, 1, 345, 2334, 66, 67, 66) should return 2.
*/

function findMatches(...numbers) {
    let target = numbers[0];
    let matches = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] == target) {
            matches++;
        }
    }

    return matches;
}

console.log(findMatches(66, 1, 345, 2334, 66, 67, 66));