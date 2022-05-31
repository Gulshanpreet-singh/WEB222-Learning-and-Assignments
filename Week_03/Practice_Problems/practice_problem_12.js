/*
Room booking codes must take the following form: room number (1-305) followed by - followed by the month as a number (1-12) followed by the day as a number (1-31). For example, all of the following are valid: "1-1-1", "250-10-3", "66-12-12". Write a RegExp to check whether a room booking code is valid or not, which allows any of the valid forms.
*/

function validRoom(roomNumber) {
    let regex = /[0-9]+[-][0-9]+[-][0-9]+/g;
    return regex.test(roomNumber);
}

console.log(validRoom("250-10-3"));
console.log(validRoom("1-1-1"));
console.log(validRoom("66-12-12"));
console.log(validRoom("250-10f"));
console.log(validRoom("250-10f-acs"));