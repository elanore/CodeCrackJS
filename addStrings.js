var addStrings = function (num1, num2) {
  // Initialize result and carry
  let result = "";
  let carry = 0;

  // Start from the last character of both strings
  let i = num1.length - 1;
  let j = num2.length - 1;

  // Loop until both numbers are completely processed
  while (i >= 0 || j >= 0 || carry > 0) {
    // Get the current digits, if there's no digit left, use 0
    let digit1 = i >= 0 ? num1[i] - "0" : 0;
    let digit2 = j >= 0 ? num2[j] - "0" : 0;

    // Add the two digits and carry
    let sum = digit1 + digit2 + carry;

    // Compute the new carry and the digit to add to the result
    carry = Math.floor(sum / 10);
    let digit = sum % 10;

    // Append the digit to the result (we will reverse it later)
    result = digit + result;

    // Move to the next digits
    i--;
    j--;
  }

  // Return the final result
  return result;
};

// Example Usage
console.log("Sum is", addStrings("11", "123")); // Output: "134"
console.log("Sum is", addStrings("456", "77")); // Output: "533"
console.log("Sum is", addStrings("0", "0")); // Output: "0"
