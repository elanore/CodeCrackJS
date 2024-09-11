function merge(nums1, m, nums2, n) {
  // Start from the end of nums1 and nums2 and merge them
  let i = m - 1; // pointer for nums1
  let j = n - 1; // pointer for nums2
  let k = m + n - 1; // pointer for the last element in nums1 (including the extra space for nums2)

  // While there are elements in both arrays
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i]; // Place the larger element in the correct position
      i--;
    } else {
      nums1[k] = nums2[j]; // Place the larger element in the correct position
      j--;
    }
    k--;
  }

  // If there are remaining elements in nums2, place them in nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }

  // Output the merged array
  console.log("mergedsortedarrays", nums1);
}

// Test case 1
let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3); // Output: [1, 2, 2, 3, 5, 6]
