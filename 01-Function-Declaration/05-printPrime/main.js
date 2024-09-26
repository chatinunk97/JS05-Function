function validateInput(num) {
  if (num === null || num.trim() === "" || isNaN(num)) {
    return false;
  } else {
    return true;
  }
}

function isPrimeSub(num) {
  isPrime = true;
  for (d = 2; d < num; d++) {
    if (num % d === 0) {
      return false;
    }
  }
  return true;
}

function isPrimeRange(num) {
  let result = "";
  let count = 0;

  // Data Validation//
  if (!validateInput(num)) {
    console.log("Invalid Input");
    return;
  }

  for (i = 2; i <= num; i++) {
    if (isPrimeSub(i)) {
      result += `${i}, `;
      count++;
    }
  }
  console.log(result);
  console.log(`There are ${count} Prime numbers in the range 1 to ${num}`);
}

let userInput = prompt("Number pls");
isPrimeRange(userInput);


