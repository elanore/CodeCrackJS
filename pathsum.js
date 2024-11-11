var hasPathSum = function (root, targetSum) {
  // Base case: if root is null, there is no path
  if (!root) return false;

  // Check if we're at a leaf node and if path sum equals targetSum
  if (!root.left && !root.right) return root.val === targetSum;

  // Subtract the current node's value from targetSum
  targetSum -= root.val;

  // Recursively check left and right subtrees
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};

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
console.log("has path sum", hasPathSum(root, targetSum));
