function romanToInt(s) {
  // Map to store Roman numeral values
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0; // Variable to store the final result

  // Loop through each character in the string
  for (let i = 0; i < s.length; i++) {
    const currentVal = romanMap[s[i]]; // Value of the current Roman numeral
    const nextVal = romanMap[s[i + 1]]; // Value of the next Roman numeral

    // If the next value is larger, subtract the current value from the total
    if (nextVal > currentVal) {
      total -= currentVal;
    } else {
      // Otherwise, add the current value to the total
      total += currentVal;
    }
  }

  return total; // Return the converted integer
}

// Example usage
console.log(romanToInt("V"), "roman to integer"); // Output: 5 roman to integer
