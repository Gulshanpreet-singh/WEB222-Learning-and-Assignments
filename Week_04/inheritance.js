/*
In JavaScript, if we wish to create a new object based on another object (ie inherit properties and methods from another object and extend the functionality, we need to work with object prototypes
    
Note: this is unlike classical inheritance model in C++, Java, C#, etc where Classes inherit from other Classes
In JavaScript, objects are not based on classes. 

Prototypal Inheritance: Objects inherit from objects.
*/

// Object.create()
var rectangle1 = {
  width: 10,
  height: 15,
  show: function () {
    console.log("dimensions: " + this.width + " x " + this.height);
  },
};
// creates a new rectangle using rectangle1 as prototype
var rectangle2instance = Object.create(rectangle1); // Make rectangle2 inherit from rectangle1

rectangle2instance.width = 20;
rectangle2instance.height = 25;
rectangle2instance.show(); // dimensions: 20 x 25

// OOP Example
var subject = {
    code: "",
    desc: "",
    prog: [], //  the prog property is an array
    info: {}  //  the info property is an object
};

var web222   = Object.create(subject);
web222.code = 'WEB222';
web222.desc = 'Web Programming Principles';
web222.prog = ['CPD', 'CPA'];
web222.info  = { hours: 4, url:' https://ict.senecacollege.ca/course/web222 ' };
