function removeDuplicates(nums) {
  if (nums.length === 0) return 0;

  let k = 1; // The first element is always unique, so start counting from 1
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i]; // Move unique element to position `k`
      k++; // Increment the count of unique elements
    }
  }
  return k; // Return the count of unique elements
}

console.log("unique elements count ", removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
