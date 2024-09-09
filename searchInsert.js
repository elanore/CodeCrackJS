function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // If target is not found, return the position where it would be inserted
  return left;
}

// Test cases
console.log("searchInsert", searchInsert([1, 3, 5, 6], 5)); // Output: 2
console.log("searchInsert", searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log("searchInsert", searchInsert([1, 3, 5, 6], 7)); // Output: 4
console.log("searchInsert", searchInsert([1, 3, 5, 6], 0)); // Output: 0
