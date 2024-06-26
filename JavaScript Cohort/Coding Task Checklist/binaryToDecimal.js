function BinaryToDecimal(num) {
  let Decimal = 0;
  let i = 0;
  while (num != 0) {
    let reminder = num % 10;
    let result = reminder * Math.pow(2, i);
    Decimal += result;
    i += 1;
    num = Math.floor(num / 10);
  }
  return Decimal;
}

console.log(`Decimal Number for Given Number is ${BinaryToDecimal(11111)}`);

function binaryToDecimal(num) {
  Decimal = 0;
  i = 0;
  while (num != 0) {
    reminder = num % 10;
    result = reminder * Math.pow(2, i);
    Decimal += result;
    i++;
    num = Math.floor(num / 10);
  }
  return Decimal;
}

console.log(binaryToDecimal(11111));
