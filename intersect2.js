var intersect = function (nums1, nums2) {
  // Create a map to store the count of each element in nums1
  let countMap = new Map();

  // Populate the map with counts from nums1
  for (let num of nums1) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }

  let result = [];

  // Iterate through nums2, check if the element exists in the map
  // and has a non-zero count, if so, add to result and decrease count
  for (let num of nums2) {
    if (countMap.has(num) && countMap.get(num) > 0) {
      result.push(num);
      countMap.set(num, countMap.get(num) - 1);
    }
  }

  return result;
};

// Example 1:
let nums1Example1 = [1, 2, 2, 1];
let nums2Example1 = [2, 2];
console.log(intersect(nums1Example1, nums2Example1)); // Output: [2, 2]

// Example 2:
let nums1Example2 = [4, 9, 5];
let nums2Example2 = [9, 4, 9, 8, 4];
console.log(intersect(nums1Example2, nums2Example2)); // Output: [4, 9] or [9, 4]
