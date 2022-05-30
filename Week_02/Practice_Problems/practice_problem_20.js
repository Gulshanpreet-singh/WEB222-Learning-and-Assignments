/*
Using the previous function, write an enclosing function that takes any number of String arguments and returns them in encoded form, concatenated together like so: "?...&...&..." where “…” are the encoded strings. buildQueryString("hello world", "goodnight moon") should return "?hello%20world&goodnight%20moon"
*/

function buildQueryString(...strings) {
    let returnStr = '?';
    let prepareString = input => encodeURIComponent(input);
    for (let i = 0; i < strings.length; i++) {
        if (i != strings.length - 1) {
            returnStr += prepareString(strings[i]) + '&';
        }
        else {
            returnStr += prepareString(strings[i]);
        }
    }

    return returnStr;
}

console.log(buildQueryString("hello world", "goodnight moon"));