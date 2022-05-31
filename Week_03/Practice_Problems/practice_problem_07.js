/*
Write a function whereIsWaldo that takes an Array of Strings and uses the array’s forEach() method to create a new Array with only the elements that contain the text "waldo" or "Waldo” somewhere in them: whereIsWaldo(['Jim Waldorf, 'Lynn Waldon', 'Frank Smith']) should return 'Jim Waldorf, 'Lynn Waldon']. Bonus: try to rewrite your code using the Array’s filter() method.
*/

function whereIsWaldo(arr){
    var newArr = [];
    arr.forEach(item => {
        if (/[wW]aldo/.test(item)) {
            newArr.push(item);
        }
    });

    return newArr;
}
console.log(whereIsWaldo(['Jim Waldorf', 'Lynn Waldon', 'Frank Smith']));

// Using Filter
function whereIsWaldo(arr){
    return arr.filter(item=>/[wW]aldo/.test(item));  
}