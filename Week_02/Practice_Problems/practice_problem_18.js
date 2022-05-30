/*
Function to log all arguments larger than 255: showOutsideByteRange(1, 5, 233, 255, 256, 0) should log 256 to the console.
*/

function showOutsideByteRange(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 255) {
            console.log(numbers[i]);
        }
    }
}

showOutsideByteRange(1, 5, 233, 255, 256, 0);