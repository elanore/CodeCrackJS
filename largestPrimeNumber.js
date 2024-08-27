const pArray = [4, 7, 5, 9, 8, 11, 12, 97, 42, 47];
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function largestPrime(arr) {
  let maxPrime = -1;
  for (let num of arr) {
    if (isPrime(num) && num > maxPrime) {
      maxPrime = num;
    }
  }
  return maxPrime;
}

const largestPrimeNumber = largestPrime(pArray);
console.log("largest prime number is : ", largestPrimeNumber);
