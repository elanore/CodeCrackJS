var isHappy = function (n) {
  // Function to calculate the sum of the squares of digits of a number
  function getSumOfSquares(num) {
    let sum = 0;
    while (num > 0) {
      let digit = num % 10; // Get the last digit
      sum += digit * digit; // Add square of the digit
      num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
  }

  let seen = new Set(); // To store numbers we've already encountered

  // Continue until we either find a happy number or a cycle
  while (n !== 1 && !seen.has(n)) {
    seen.add(n); // Add current number to the set
    n = getSumOfSquares(n); // Get the sum of the squares of digits
  }

  // If we end up with 1, it's a happy number, otherwise it's not
  return n === 1;
};

// Example 1: 19 is a happy number
console.log("The number is happy", isHappy(19)); // Output: true

// Example 2: 2 is not a happy number
console.log("The number is happy", isHappy(2)); // Output: false
