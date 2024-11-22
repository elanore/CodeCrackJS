function hasPathSum(root, targetSum) {
  // If root is null, there's no path
  if (!root) return false;

  // If it's a leaf node, check if the path sum equals targetSum
  if (!root.left && !root.right) return root.val === targetSum;

  // Recursively check left and right subtrees with the updated targetSum
  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
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
console.log("Has path sum:", hasPathSum(root, targetSum));
