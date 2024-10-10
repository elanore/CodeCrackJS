// Define the map function
var map = function (arr, fn) {
  // Initialize a new array to store the transformed values
  let result = [];

  // Iterate through the input array
  for (let i = 0; i < arr.length; i++) {
    // Apply the transformation function fn to each element and index
    result.push(fn(arr[i], i));
  }

  // Return the transformed array
  return result;
};

// Example 1: Increment each element by 1
const arr1 = [1, 2, 3];
const plusOneFunc = function (n) {
  return n + 1;
};
console.log(map(arr1, plusOneFunc)); // Output: [2, 3, 4]

// Example 2: Add the index to each element
const arr2 = [1, 2, 3];
const plusIndexFunc = function (n, i) {
  return n + i;
};
console.log(map(arr2, plusIndexFunc)); // Output: [1, 3, 5]

// Example 3: Constant function returning 42
const arr3 = [10, 20, 30];
const constantFunc = function () {
  return 42;
};
console.log(map(arr3, constantFunc)); // Output: [42, 42, 42]
