//a.
function greet(name) {
  return `Hello, ${name}! `;
}
//b.
console.log(greet("Mani"));

//c.
function greet(name) {
  if (name) {
    return `Hello, ${name}! `;
  } else {
    return `Hello, Guest! `;
  }
}

//d.

const greetFunction = function (name) {
  return `Hello, ${name}!`;
};

console.log(greetFunction("Mani"));
//e.

const greetFunction1 = (name) => {
  return `Hello, ${name}!`;
};
console.log(greetFunction1());
