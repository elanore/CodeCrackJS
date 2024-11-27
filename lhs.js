function findLHS(nums) {
  let counts = {};
  let maxLen = 0;

  // Count the frequency of each number
  for (let num of nums) {
    counts[num] = (counts[num] || 0) + 1;
  }

  // Check for harmonious subsequences
  for (let num in counts) {
    let nextNum = parseInt(num) + 1; // Check for the next number
    if (counts[nextNum]) {
      maxLen = Math.max(maxLen, counts[num] + counts[nextNum]);
    }
  }

  return maxLen;
}

// Example usage
const inputArray = [1, 3, 2, 2, 5, 2, 3, 7];
console.log("LHS is", findLHS(inputArray)); // Output: 5
