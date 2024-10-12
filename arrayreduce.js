// Define the custom reduce function
var reduce = function (nums, fn, init) {
  // Initialize the accumulator with the initial value
  let accum = init;

  // Iterate over each element in the nums array
  for (let i = 0; i < nums.length; i++) {
    // Update the accumulator by applying the function to the current element
    accum = fn(accum, nums[i]);
  }

  // Return the final accumulated value
  return accum;
};

// Example 3
const nums3 = [];
const sumFunction3 = function (accum, curr) {
  return 0;
};
const init3 = 25;
console.log("array reduce", reduce(nums3, sumFunction3, init3)); // Output: 25
