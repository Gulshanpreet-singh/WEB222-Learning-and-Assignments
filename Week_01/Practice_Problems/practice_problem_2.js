/*
Write a program that takes the value of a variable called “input” (declared as any whole number at the top of your program) and outputs the factorial of the number (input).
*/

let input = 5;

let fact = 1, i;
for (i = 1; i <= input; i++) {
    fact *= i;
}

console.log(`${input}! = ${fact}`);