/*
Given r (radius) of a circle, calculate the area of a circle (A = π * r * r).
*/

// Method 1
function areaOfCircle(radius) {
    return Math.PI * radius ** 2;
}

// Method 2
let areaOfCircle = function() {
    return Math.PI * radius ** 2;
}

// Method 3
let areaOfCircle = (radius) => Math.PI * radius ** 2;

console.log("Area of Circle: " + areaOfCircle(20));