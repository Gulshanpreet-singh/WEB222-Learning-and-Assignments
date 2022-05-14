/*
Write a program that takes the value of a variable called “input” (declared as any whole number at the top of your program) and outputs whether the number (input) is prime or not by displaying a message in the following format, either: “x is a prime number” or “x is not a prime number” where x is the value of the “input” variable.
*/

let input = 4, factors = 0, i;

if (input == 1) {
    console.log(input + " is neither prime nor composite");
}

for (i = 2; i < input; i++) {
    if (input % i == 0) {
        factors++;
    }
}

if (factors == 0) {
    console.log(input + " is a prime number");
}
else {
    console.log(input + " is not a prime number");
}