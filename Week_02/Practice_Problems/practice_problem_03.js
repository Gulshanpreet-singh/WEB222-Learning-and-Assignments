/*
Write a function that converts values in Celcius to Farenheit: convert(0) should return "32 F".
*/

function convert(celcius) {
    let farenheit = 1.8 * celcius + 32;
    return `${farenheit} F`;
}

console.log(convert(100));