function trap(height) {
  if (height.length < 3) return 0; // Not enough bars to trap water

  let n = height.length;
  let leftMax = Array(n).fill(0);
  let rightMax = Array(n).fill(0);
  let waterTrapped = 0;

  // Fill leftMax array
  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }

  // Fill rightMax array
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }

  // Calculate water trapped
  for (let i = 0; i < n; i++) {
    waterTrapped += Math.min(leftMax[i], rightMax[i]) - height[i];
  }

  return waterTrapped;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
