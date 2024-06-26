//a
function calculateArea(width, height) {
  return `Area of rectangle ${width * height}`;
}

//b.
console.log(calculateArea(5, 10));

//c.
function calculateArea1(width, height) {
  if (width && height === 1) {
    return 1;
  } else {
    return width * height;
  }
}

console.log(calculateArea1());

//d.Storing Function in Varialble
const calculateAreaFunction = function (width, height) {
  return `Area of Rectangle ${width * height}`;
};

//e.Arrow Function
const calculateArea = (width, height) => {
  return `Area of Rectangle ${width * height}`;
};
