function isPrime(num) {
  var prime = true;
  if (num === 1 && num === 2) {
    console.log("Prime");
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        prime = false;
        break;
      }
    }
  }
  if (prime) {
    console.log("Prime");
  } else {
    console.log("Not Prime");
  }
}

isPrime(31);
