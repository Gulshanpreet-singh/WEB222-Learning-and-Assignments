/*
Modify your solution above to only include units that make sense: "1 Minute" vs. "3 Hours, 5 Minutes" vs. "1 Day, 1 Hour, 56 Minutes" etc
*/

function convert(seconds) {
    let returnStr = '';
    let days = Math.floor(seconds / (60 * 60 * 24));
    seconds -= days * (60 * 60 * 24);

    let hours = Math.floor(seconds / (60 * 60));
    seconds -= hours * (60 * 60);

    let minutes = Math.round(seconds / 60);

    returnStr += (days > 0) ? `${days} Days  ` : '';
    returnStr += (hours > 0) ? `${hours} Hours  ` : ''; 
    returnStr += (minutes > 0) ? `${minutes} Minutes  ` : ''; 

    return returnStr.trim().replace(/\s\s/g, ', ');
}

console.log(convert(3600342));
console.log(convert(3600));
console.log(convert(36313));