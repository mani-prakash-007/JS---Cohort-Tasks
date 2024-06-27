// //1.Basic Array

// const color = ["Red", "Green", "Blue", "White", "Black", "Grey"];

// console.log(color[0]);

// color[1] = "Yellow";

// console.log(color);

// color.push("Green");
// console.log(color);

// //2.Loops for Array

// for (let i = 0; i < color.length; i++) {
//   console.log(color[i]);
// }

// //while loop

// let i = 0;
// while (i < color.length) {
//   console.log("\t\t", color[i]);
//   i += 1;
// }

// //for...of loop

// for (const colors of color) {
//   console.log("\t", colors);
// }

// //3.Array as an Object

// //Array Type
// console.log(typeof color);

// //Array Length
// console.log(color.length);

// //Adding a Element
// color.push("Rose");
// console.log(color);

// //Removing a Element
// color.pop();
// console.log(color);

// //indexOf method
// console.log(color.indexOf("Black"));

// //Adding property to array

// color.owner = "Mani Prakash";

// console.log(color);

// //for...in loop

// for (const keys in color) {
//   console.log(keys + " " + color[keys]);
// }

// Basic Array

const colors = ["Yellow", "Red", "Green"];

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// // colors[1] = "Yellow";

// // console.log("Changed Element  " + colors[1]);

// // console.log(colors[0]);
// // console.log(colors[2]);
// console.log("-----------");
// colors.push("Blue");

// for (let i = 0; i < colors.length; i++) {
//   console.log(colors[i]);
// }

// console.log("---------While Loop-------");

// let j = 0;
// while (j < colors.length) {
//   console.log(colors[j]);
//   j = j + 1;
// }
// console.log("---------For of Loop-------");

// for (const abc of colors) {
//   console.log("\t", abc);
// }

console.log(typeof colors);
console.log(colors.length);

colors.push("Purple");
colors.push("Purple");
colors.push("Purple");

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

colors.pop();
colors.pop();
colors.pop();
console.log("-----------POP-----------");
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

console.log(colors.indexOf("Yellow"));
