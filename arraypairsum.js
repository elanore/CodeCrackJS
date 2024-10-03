(function () {
  var arrayPairSum = function (nums) {
    // Step 1: Sort the array in ascending order
    nums.sort((a, b) => a - b);

    let maxSum = 0;

    // Step 2: Add every second element (starting from the first) to the sum
    for (let i = 0; i < nums.length; i += 2) {
      maxSum += nums[i];
    }

    return maxSum;
  };

  // Example 1
  let nums1 = [1, 4, 3, 2];
  console.log("array pair sum", arrayPairSum(nums1)); // Output: 4

  // Example 2
  let nums2 = [6, 2, 6, 5, 1, 2];
  console.log("array pair sum", arrayPairSum(nums2)); // Output: 9
})();
