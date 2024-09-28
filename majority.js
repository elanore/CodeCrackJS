// Function to find the majority element
var majorityElement = function (numsArray) {
  // Use a different parameter name (numsArray) to avoid conflicts
  let count = 0;
  let candidate = null;

  // Find the candidate for majority element
  for (let num of numsArray) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

// Example usage - Use a different name for the array (numsArray)
let numsArray = [2, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 1]; // Declare the array
console.log(majorityElement(numsArray)); // Output: 2
