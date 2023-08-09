function isPrime(num) {
  let isPrime = true;
  // Data Validation//
  if (typeof num === "number") {
  } else if (num === null || num.trim() === "" || isNaN(num)) {
    console.log(`Your input : " ${num} " is NOT VALID NUMBER`);
    return;
  }

  //Check if it's a prime number
  for (divider = 2; divider < num; divider++) {
    if (num % divider === 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(`The number ${num} is a Prime Number`);
  } else {
    console.log(`The number ${num} is NOT a Prime Number`);
  }
}
let userInput = prompt("Number pls");
isPrime(userInput);
