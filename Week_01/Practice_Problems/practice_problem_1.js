/*
Write a program that takes the value of a variable called “input” (declared as any whole number at the top of your program) and outputs whether the number (input) is even or odd by displaying a message in the following format, either: “x is even” or “x is odd” where x is the value of the “input” variable.
*/

let input = 5;

if (input % 2 == 0) {
    console.log(`${input} is even`);
}
else {
    console.log(`${input} is odd`);
}