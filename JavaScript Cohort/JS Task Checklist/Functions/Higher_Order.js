//a. Defining a function called higherOrderFunction

function higherOrderFunction(num, callback) {
  callback(num);
}

//b.Define a function called callbackFunction
function callbackFunction(number) {
  console.log(number);
}

//Calling higherOrderFunction
higherOrderFunction(50, callbackFunction);

//c. CallbackFunction as Function Expression

const callbackFunction0 = function (num) {
  console.log(num);
};

//d. square of num
const callbackFunction1 = function (num) {
  console.log(num * num);
};

higherOrderFunction(5, callbackFunction1);

//e.New Higherorder function and callbackfunction with two parms

const callbackFunction2 = function (num1, num2) {
  console.log(num1 + num2);
};

function higherOrderFunction1(n1, n2, callback) {
  callbackFunction2(n1, n2);
}

higherOrderFunction1(2, 2, callbackFunction2);
