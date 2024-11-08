var getMaximumXor = function (nums, maximumBit) {
  let xorSum = 0;
  const result = [];
  const maxK = (1 << maximumBit) - 1; // 2^maximumBit - 1

  // Calculate the XOR of all elements in nums initially
  for (let num of nums) {
    xorSum ^= num;
  }

  // Iterate from the end of the nums array
  for (let i = nums.length - 1; i >= 0; i--) {
    // Find the value of k that maximizes the XOR
    result.push(xorSum ^ maxK);
    // Update xorSum by removing the last element
    xorSum ^= nums[i];
  }

  return result;
};
console.log("max XOR", getMaximumXor([0, 1, 1, 3], 2));
console.log("max XOR", getMaximumXor([2, 3, 4, 7], 3));
console.log("max XOR", getMaximumXor([0, 1, 2, 2, 5, 7], 3));
