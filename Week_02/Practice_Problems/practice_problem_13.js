/*
Function that takes a number of seconds as a Number, returning a String formatted like "X Days, Y Hours, Z Minutes" rounded to the nearest minute.
*/

function convert(seconds) {
    let days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * (60 * 60 * 24);

    let hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);

    let minutes = Math.round(seconds / 60);

    return `${days} Days, ${hours} Hours, ${minutes} Minutes`;
}

console.log(convert(21600097));