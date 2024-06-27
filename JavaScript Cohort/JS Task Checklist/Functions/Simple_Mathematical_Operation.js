//Double The Number CallBack Function
function doubleNum(n) {
  return 2 * n;
}

function doubleNumberCallback(num, mycallback) {
  res = mycallback(num);
  console.log(res);
}

doubleNumberCallback(10, doubleNum);

//Square the number CallBack function

function SquareNumber(n) {
  return n ** 2;
}
function squareNumberCallback(num, mycallback) {
  res = mycallback(num);
  console.log(res);
}

squareNumberCallback(10, SquareNumber);

//Increment the number CallBack function

function increment(n) {
  return n + 1;
}

function incrementNumber(num, MyCallback) {
  res = MyCallback(num);
  console.log(res);
}

incrementNumber(10, increment);

//d.

function performOperation(num, operation) {
  return operation(num);
}

//e. calling all the functions into the performoperation

const number = 10;

console.log(performOperation(number, doubleNum));
console.log(performOperation(number, SquareNumber));
console.log(performOperation(number, increment));
