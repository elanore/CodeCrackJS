var largestCombination = function (candidates) {
  let maxCombinationSize = 0;

  // Check each bit position up to 32 bits (sufficient for the problem constraints)
  for (let bit = 0; bit < 32; bit++) {
    let count = 0;

    // Count how many numbers have the current bit set
    for (let num of candidates) {
      if ((num & (1 << bit)) !== 0) {
        count++;
      }
    }

    // Update maxCombinationSize with the largest count at any bit position
    maxCombinationSize = Math.max(maxCombinationSize, count);
  }

  return maxCombinationSize;
};

// Example usage:
console.log(
  "largest combination",
  largestCombination([16, 17, 71, 62, 12, 24, 14])
); // Output: 4
console.log("largest combination", largestCombination([8, 8])); // Output: 2
