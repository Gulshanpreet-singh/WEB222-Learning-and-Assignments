/*
Function that takes a String and returns its value properly encoded for use in a URL. prepareString("hello world") should return "hello%20world"
*/

let prepareString = input => encodeURIComponent(input);
console.log(prepareString("hello world"));