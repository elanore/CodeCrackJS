var findLHS = function (nums) {
  let numMap = new Map();
  let maxLen = 0;

  // Create a frequency map of the elements
  for (let num of nums) {
    numMap.set(num, (numMap.get(num) || 0) + 1);
  }

  // Iterate through the map to find the longest harmonious subsequence
  for (let [key, value] of numMap) {
    if (numMap.has(key + 1)) {
      maxLen = Math.max(maxLen, value + numMap.get(key + 1));
    }
  }

  return maxLen;
};

// Example usage:
const inputArray = [1, 3, 2, 2, 5, 2, 3, 7];
console.log("LHS is", findLHS(inputArray)); // Output: 5
