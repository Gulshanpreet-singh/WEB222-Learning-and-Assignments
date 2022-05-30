/*
Modify your solution to the previous function to allow a second argument: "F" or "C", and use that to determine what the scale of the value is, converting to the opposite: convert(122, "F") should return "50 C".
*/

function convert(temp, scale) {
    if (scale === 'C') {
        return `${1.8 * temp + 32} F`;
    }
    else if (scale === 'F') {
        return `${(temp - 32) / 1.8} C`
    }
}

console.log(convert(100, 'C'));
console.log(convert(100, 'F'));