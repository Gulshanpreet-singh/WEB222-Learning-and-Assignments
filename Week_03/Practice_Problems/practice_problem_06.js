/*
Write a function measure which takes an Array of Strings and uses the array’s forEach() method to determine the size of each string in the array, returning the total: measure(['a', 'bc']) should return 3. Bonus: try to rewrite your code using the Array’s reduce() method.
*/

function measure(stringArray) {
    let sum = 0;
    stringArray.forEach(element => sum += element.length);
    return sum;
}

console.log(measure(['a', 'bc']));

// Using reduce method
function measure(arr) {
    let sum =0;
    return arr.reduce((prev,curent) => 
        prev+curent.length,sum
    );
}