/*
A String named addresses contains a list of street addresses. Some of the addresses use short forms: "St." instead of "Street" and "Rd" instead of "Road". Using String methods, convert all these short forms to their full versions.
*/

function convert(inputString) {
    let newstr = inputString;
    newstr = newstr.replace("St.", "Street");
    newstr = newstr.replace("Rd.", "Road");
    newstr = newstr.replace("Ave.", "Avenue");
    
    return newstr;
}

console.log(convert("Brimley Rd., Lawrence Avenue, Random Ave., Bond St., Whitchurch Street"));