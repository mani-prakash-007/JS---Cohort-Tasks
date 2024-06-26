function isArm(num) {
  RealNum = num;
  originalNum = num;
  temp = num;
  digit = 0;
  while (temp != 0) {
    digit = digit + 1;
    temp = Math.floor(temp / 10);
  }
  digits = digit;
  sum = 0;
  while (originalNum != 0) {
    reminder = originalNum % 10;
    sum = sum + Math.pow(reminder, digits);
    originalNum = Math.floor(originalNum / 10);
  }
  if (sum === RealNum) {
    console.log(`${RealNum} is a Armstrong Number`);
  } else {
    console.log(`${RealNum} is Not Armstrong Number`);
  }
}

isArm(153);
