function isPerfect(num) {
  let Perfect = 0;
  for (let i = 1; i < num; i++) {
    if (num % i == 0) {
      Perfect += i;
      console.log(Perfect);
    }
  }
  if (Perfect == num) {
    console.log(`${num} is a Perfect Number`);
  } else {
    console.log(`${num} is not a Perfect Number`);
  }
}

isPerfect(28);
