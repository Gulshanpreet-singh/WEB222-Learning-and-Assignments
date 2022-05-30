/*
Simulate rolling a dice using random(). The function should allow the caller to specify any number of sides, but default to 6 if no side count is given: roll() (assume 6 sided, return random number between 1 and 6) vs. roll(50) (50 sided, return number between 1 and 50).
*/

function roll(max = 6) { // Setting a default value: Method 1
    // // Method 2
    // max = max||6;
    // // Method 3
    // if (typeof max == "undefined") {
    //     max = 6;
    // }
    return Math.floor(Math.random() * max + 1);
}

console.log(roll());