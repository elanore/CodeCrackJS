var minChanges = function (s) {
  let changes = 0;
  let n = s.length;

  // Iterate through the string in blocks of size 2
  for (let i = 0; i < n; i += 2) {
    // If we are at the last character, we just skip it as we cannot form a pair
    if (i + 1 < n) {
      if (s[i] !== s[i + 1]) {
        // If characters are different, we need to change one of them
        changes++;
      }
    }
  }

  return changes;
};

// Test cases with labeled console output
console.log(
  "Input: '1101' - Expected output: 1, Actual output:",
  minChanges("1101")
); // Expected output: 1
console.log(
  "Input: '1001' - Expected output: 2, Actual output:",
  minChanges("1001")
); // Expected output: 2
console.log(

console.log(
  "Input: '0000' - Expected output: 0, Actual output:",
  minChanges("0000")
); // Expected output: 0
console.log(
  "Input: '1100' - Expected output: 0, Actual output:",
  minChanges("1100")
); // Expected output: 0
