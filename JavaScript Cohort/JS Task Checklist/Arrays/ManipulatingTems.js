// a.

let temperatures = [-3, 14, 22, 5, 10, -10, 38, -30];

//b.

function logEach(item) {
  console.log(item);
}

console.log("---Logging Temperatures---");
temperatures.forEach(logEach);

//c.

const CeltoFahr = (item) => {
  console.log((item * 9) / 5 + 32);
};

console.log("---Converting  Celcious to Fahrenheit---");
temperatures.forEach(CeltoFahr);

//d.
const CelioustoFahrenheit = (item) => {
  return (item * 9) / 5 + 32;
};

console.log(
  "---Converting  Celcious to Fahrenheit and Stored in a sub array---"
);
let temperaturesInFahrenheit = temperatures.map(CelioustoFahrenheit);
console.log(temperaturesInFahrenheit);

//e.
const belowFreeze = (item) => {
  return item < 0;
};

console.log("---below Freezing ---");
let belowFreezing = temperatures.filter(belowFreeze);
console.log(belowFreezing);
