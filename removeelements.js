var removeElement = function (nums, val) {
  // Initialize a pointer to track the position to place the next non-val element
  let i = 0;

  // Loop through the entire array
  for (let j = 0; j < nums.length; j++) {
    // If the current element is not equal to val
    if (nums[j] !== val) {
      // Assign the current element to nums[i] and move the pointer i forward
      nums[i] = nums[j];
      i++;
    }
  }

  // Log the array after the removal operation and the count of remaining elements
  console.log("Modified array:", nums);
  console.log("Number of elements not equal to", val, ":", i);

  // Return the count of non-val elements (which is the pointer i)
  return i;
};

// Example usage:
let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
let output = removeElement(nums, val);

// Output the result to the console
console.log("Result (number of elements not equal to val):", output);
