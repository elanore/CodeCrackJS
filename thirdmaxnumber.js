var thirdMax = function (nums) {
  // Step 1: Create a set to hold distinct values
  const distinctNums = new Set(nums);

  // Step 2: Convert the set back to an array and sort it in descending order
  const sortedDistinct = Array.from(distinctNums).sort((a, b) => b - a);

  // Step 3: Check if there are at least 3 distinct numbers
  if (sortedDistinct.length >= 3) {
    // Return the third maximum
    return sortedDistinct[2];
  } else {
    // Return the maximum if there are less than 3 distinct numbers
    return sortedDistinct[0];
  }
};

// Example usage:
console.log("third max number", thirdMax([2, 2, 3, 1, 4, 5, 6, 8])); // Output: 1
