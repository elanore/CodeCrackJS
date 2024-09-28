var missingNumber = function (nums) {
  // Check if nums is an array
  if (!Array.isArray(nums)) {
    console.log("Input is not an array:", nums);
    return;
  }

  // Calculate the expected sum of numbers from 0 to n
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;

  // Calculate the actual sum of numbers in the array
  let actualSum = nums.reduce((acc, num) => acc + num, 0);

  // The missing number is the difference between expected and actual sums
  let missingNum = expectedSum - actualSum;

  console.log("Missing number is:", missingNum);
  return missingNum;
};

// Example 1:
missingNumber([3, 0, 1]); // Output: 2

// Example 2:
missingNumber([0, 1]); // Output: 2

// Example 3:
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]); // Output: 8
