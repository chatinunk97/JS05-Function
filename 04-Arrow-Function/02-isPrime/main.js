let isPrime = (a) => {
  for (i = 2; i < a; i++) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrime(5));
