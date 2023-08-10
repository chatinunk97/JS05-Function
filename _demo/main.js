//Test
function isPrime(n) {
  let isPrime = true;
  for (let divider = 2; divider < n; divider++) {
    if (n % divider == 0) {
      isPrime = false;

      break;
    }

  }
  if (isPrime){
    console.log(`${n} is a Prime Number`)
    return true;
    }
    else{
        console.log(`${n} is NOT a Prime Number`)
        return false;
    }
}

