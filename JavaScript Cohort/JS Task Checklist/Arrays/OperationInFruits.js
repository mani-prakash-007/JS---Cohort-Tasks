//a.
let fruits = ["apple", "banana", "cherry", "date"];

//b.
const logAll = (item) => {
  console.log(item);
};

fruits.forEach(logAll);

//c.

const reverseString = (item) => {
  return item.split("").reverse().join("");
};

console.log("-----Reversing the String------");
let reversedFruits = fruits.map(reverseString);
console.log(reversedFruits);

//d.
const LongFruit = (item) => {
  return item.split("").length > 5;
};

let longFruits = fruits.filter(LongFruit);
console.log(longFruits);

//e.

function Upper_Contains_A(item) {
  return item.includes("a");
}

console.log("----Logging the Element contains 'A' ");
filteredFruits = fruits
  .filter(Upper_Contains_A)
  .map((item) => item.toUpperCase());
console.log(filteredFruits);

//f.

let totalCharacters = 0;

function totalChars(item) {
  totalCharacters = totalCharacters + item.length;
  return totalCharacters;
}

fruits.forEach(totalChars);
console.log("Total Chars in Fruits are " + totalCharacters);
