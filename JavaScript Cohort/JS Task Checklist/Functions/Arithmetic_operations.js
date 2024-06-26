//a.
function addNumbers(num1, num2) {
  sum = num1 + num2;
  return sum;
}

//b.

function multiplyNumbers(num1, num2) {
  product = num1 * num2;
  return product;
}

//c.
function subtractNumbers(num1, num2) {
  result = num2 - num1;
  return result;
}

//d.
function divideNumbers(num1, num2) {
  result = num1 / num2;
  return result;
}

//e.
function performArithmetic(num1, num2, operation) {
  return operation(num2, num1);
}

//f.

let add = performArithmetic(10, 20, addNumbers);
let sub = performArithmetic(10, 20, subtractNumbers);
let mul = performArithmetic(10, 20, multiplyNumbers);
let div = performArithmetic(10, 20, divideNumbers);

console.log(add);
console.log(sub);
console.log(mul);
console.log(div);
