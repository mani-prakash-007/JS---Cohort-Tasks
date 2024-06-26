//a. Empty Object
let student = {};

//b. Adding Properties

student.name = "Mani Prakash";
student.email = "manip8072@gmail.com";
student.age = 20;

//c. Logging the object
console.log(student);

//d.updating age value
student.age = 10;

console.log(student);

//e.Add Greet Method

student.greet = function () {
  console.log(`Hello , ${this.name}`);
};

student.greet();

// Nested Object

//a.
student.address = {
  country: "India",
  city: "Coimbatore",
  pin_code: "641046",
};

//b.Logging nested objects
console.log(student.address);
console.log(student.address.pin_code);

//c.
student.address.pin_code = "641041";

console.log(student.address.pin_code);
