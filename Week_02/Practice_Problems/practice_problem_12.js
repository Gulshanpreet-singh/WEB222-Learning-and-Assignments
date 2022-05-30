/*
Function to subtract a discount % from a total. If no % is given, return the original value.
*/

function subDisc(original, discount) {
    if (discount) {
        original -= (discount / 100) * original;
    }

    return original;
}

console.log(subDisc(100, 20));
console.log(subDisc(100));