function nPrime(times) {
  console.log(2);
  let count = 1;
  let num = 3;
  while (count < times) {
    let i = 2;
    let prime = true;
    while (i < num) {
      if (num % i == 0) {
        prime = false;
        break;
      }
      i++;
    }
    if (prime) {
      console.log(num);
      count += 1;
    }
    num += 2;
  }
}

nPrime(100);
