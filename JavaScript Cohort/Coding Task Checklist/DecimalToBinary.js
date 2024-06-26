function DecimaToBinary(num) {
  Binary = "";

  while (num > 0) {
    reminder = num % 2; // 0
    Binary = reminder + Binary; // 0 + ""
    num = Math.floor(num / 2);
  }
  return Binary;
}

console.log(DecimaToBinary(5));

var a = 10 + "";

console.log(typeof a);
