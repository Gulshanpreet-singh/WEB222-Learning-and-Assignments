/*
An Object in JavaScript is a map (also known as an associative array or a dictionary), which is a data structure composed of a collection of key and value pairs. 
We call an Object’s key/value pairs properties.
*/

// Creating object without constructor
console.log("Creating an object without constructor: ");

let person = {
    name: 'Aryan Khurana',
    age: 18,
    college: 'Seneca College',
    courses: ['OOP244', 'DBS211', 'WEB222', 'DCF255', 'SOC270'],
    introduce: function() {
        console.log(`Hi! I am ${this.name} and I am ${this.age} years old.`);
    }
};

console.log(person.name);
console.log(person.age);
console.log(person.college);
console.log(person.courses);
person.introduce();

console.log("---------------------------------------\n");

// Creating an object with constructor
console.log("Creating an object with constructor: ");

function Car(model, speed) {
    this.model = model;
    this.speed = speed;
}

let car1 = new Car("Tesla", 200);

console.log(car1.model);
console.log(car1.speed);

console.log("---------------------------------------\n");

// Dynamically adding properties
console.log("Dynamically adding properties: ");

let person4 = {}; // Creates an empty object

person4.name = "James";
person4.age = 30;
person4.show = function () {
      console.log('My name is ' + this.name + ", and I'm " + this.age + " years old.");
};

person4.show();

console.log("---------------------------------------\n");