//a.
class Employee {
  constructor(name, email, age, department, position, salary) {
    this.Name = name;
    this.Email = email;
    this.Age = age;
    this.Dept = department;
    this.Position = position;
    this.Salary = salary;
  }
  //.b
  introduce() {
    console.log(`Hello, ${this.Name}. Your position is ${this.Position}`);
  }

  //.c
  displaySalary() {
    console.log(`Salary $${this.Salary}`);
  }
}

//d.
const newEmployee = new Employee(
  "Mani Prakash",
  "mani@gmail.com",
  20,
  "CSE",
  "Software Engineer",
  50000
);

console.log(newEmployee);

//e
const manager = new Employee(
  "XXXX",
  "xxx@gmail.com",
  30,
  "CSE",
  "Manager",
  70000
);

console.log(manager);

//f.
newEmployee.introduce();
//g.
manager.displaySalary();
