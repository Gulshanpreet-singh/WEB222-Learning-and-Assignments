/*
Write a program that takes the value of a variable called “input” (declared as any whole number at the top of your program) and outputs all the factors of that number.
*/

let input = 81, i;

let factorString = `The factors of ${input} are: `;

for (i = 1; i <= input / 2; i++) {
    if (input % i == 0) {
        factorString += i + ", ";
    }
}
factorString += input;

console.log(factorString);