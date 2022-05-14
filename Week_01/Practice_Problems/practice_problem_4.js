/*
Write a program that takes the value of a variable called “input” (declared as any whole number at the top of your program) and outputs a square made of asterisks (*) as large as the number (input). For example, if the “input” is declared with the value 5, your program would display a square made of 25 asterisks (*) – ie; 5 asterisks (*) high, by 5 asterisks (*) long.
*/

let input = 5, i, j;
let pattern = "";

for (i = 0; i < input; i++) {
    for (j = 0; j < input; j++) {
        pattern += "* ";
    }
    pattern += "\n";
}

console.log(pattern);