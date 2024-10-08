var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result ^= nums[i]; // XOR the current number with result
  }

  return result; // The single number will remain
};
console.log("single number is", singleNumber([2, 2, 1]));
console.log("single number is", singleNumber([4, 1, 2, 1, 2]));
