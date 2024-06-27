//a.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//.b

function LogNums(item) {
  console.log(item);
}

console.log("----Logging Each number----");
numbers.forEach(LogNums);

// c.
function MulNum(item) {
  console.log(item * 2);
}

console.log("----Logging Each number Mulitple by 2----");
numbers.forEach(MulNum);

// d.
function square(item) {
  return item * item;
}

console.log("----Squared Array----");
let squaredNumbers = numbers.map(square);
console.log(squaredNumbers);

//e.

const squaredArray = (item) => {
  return item * item;
};

console.log("----Squared Array with Arrow function----");
let SquaredNumbers = numbers.map(squaredArray);
console.log(squaredNumbers);

//f.
function evenNums(item) {
  if (item % 2 == 0) {
    return item;
  }
}

console.log("-----Filtered Even Nums ------");
let evenNumbers = numbers.filter(evenNums);
console.log(evenNumbers);

//g.
const EvenNumbs = (item) => {
  if (item % 2 == 0) {
    return item;
  }
};

console.log("-----Filtered Even Nums ------");
let EvenNumbers = numbers.filter(EvenNumbs);
console.log(EvenNumbers);
