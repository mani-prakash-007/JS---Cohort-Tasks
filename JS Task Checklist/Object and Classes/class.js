//Creating Friend Object
const friends = {};

friends.name = "Mani prakash";
friends.email = "abc@mail.com";
friends.age = 20;
friends.address = {
  country: "India",
  city: "Coimbatore",
  pin_code: "641046",
};

// console.log(friends);

//Creating Topper Object

const topper = {};

topper.name = "Mani prakash";
topper.email = "abc@mail.com";
topper.age = 20;
topper.address = {
  country: "India",
  city: "Coimbatore",
  pin_code: "641046",
};

// console.log(topper);

//Defining Class

class student {
  constructor(name, email, age, country, city, pin_code) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.country = country;
    this.city = city;
    this.pin_code = pin_code;
  }
  greet() {
    return console.log(`Hello, ${this.name}`);
  }
  getFullAddress() {
    return console.log(`${this.country}, ${this.city} - ${this.pin_code}`);
  }
}

//creating Object using Class

const student1 = new student(
  "Mani Prakash",
  "abc@gmail.com",
  20,
  "India",
  "Bangalore",
  "560038"
);
student1.greet();
student1.getFullAddress();
console.log(student1);

//creating Object using Class
const student2 = new student(
  "Jhon Doe",
  "jhon@gmail.com",
  21,
  "India",
  "Chennai",
  "600046"
);
console.log(student2);

//creating Object using Class

const friend = new student(
  "Kavi",
  "kavi@gmail.com",
  20,
  "India",
  "CBE",
  "641046"
);
console.log(friend);

friend.greet();
friend.getFullAddress();
