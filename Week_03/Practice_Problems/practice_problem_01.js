/*
Write a function log that takes an Array of Strings and displays them on the console.
*/

function display(s) {
    // Method 1
    for (let i = 0; i < s.length; i++) {
        console.log(`s[${i}] = ${s[i]}`);
    }

    // Method 2
    var i =0;
    for(var item of s){
        console.log("s["+i+"]="+item);
        i++;
    }

    // Method 3
    s.forEach((item,i)=>console.log("s["+i+"]="+item));
}

display(["Aryan", "Khurana", 18, "Seneca College"])