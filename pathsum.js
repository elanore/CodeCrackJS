function hasPathSum(root, targetSum) {
  // If the tree is empty, there's no path
  if (!root) return false;

  // If this is a leaf node (no left or right child)
  if (!root.left && !root.right) {
    // Check if the value of this node equals the remaining target sum
    return root.val === targetSum;
  }

  // Check the left and right subtrees with the updated target sum
  const remainingSum = targetSum - root.val;
  return (
    hasPathSum(root.left, remainingSum) || hasPathSum(root.right, remainingSum)
  );
}

// Example Usage
const root = {
  val: 5,
  left: {
    val: 4,
    left: {
      val: 11,
      left: { val: 7, left: null, right: null },
      right: { val: 2, left: null, right: null },
    },
    right: null,
  },
  right: {
    val: 8,
    left: { val: 13, left: null, right: null },
    right: {
      val: 4,
      right: { val: 1, left: null, right: null },
    },
  },
};

const targetSum = 22;
console.log("Has path sum:", hasPathSum(root, targetSum)); // Output: true
