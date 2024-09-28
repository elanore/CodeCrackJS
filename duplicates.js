function containsDuplicate(nums) {
  const numSet = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      return true;
    }
    numSet.add(nums[i]);
  }

  return false;
}

// Example 1:
console.log("contains duplicates ", containsDuplicate([1, 2, 3, 1])); // Output: true

// Example 2:
console.log("contains duplicates ", containsDuplicate([1, 2, 3, 4])); // Output: false

// Example 3:
console.log(
  "contains duplicates ",
  containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])
); // Output: true
