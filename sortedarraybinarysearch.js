var sortedArrayToBST = function (nums) {
  // Helper function to build BST recursively
  const buildBST = (left, right) => {
    if (left > right) {
      return null; // Base case: no elements to form a subtree
    }

    // Choose the middle element as the root to ensure balance
    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]); // Create the root node

    // Recursively build left and right subtrees
    root.left = buildBST(left, mid - 1); // Left subtree from left to mid-1
    root.right = buildBST(mid + 1, right); // Right subtree from mid+1 to right

    return root; // Return the constructed tree
  };

  // Start building the BST from the entire array
  return buildBST(0, nums.length - 1);
};

// Definition for a binary tree node
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Example 1
console.log("sortedarray binary search", sortedArrayToBST([-10, -3, 0, 5, 9]));
// Expected Output: A tree with root 0, left child -3, right child 9, etc.

// Example 2
console.log("sortedarray binary search", sortedArrayToBST([1, 3]));
// Expected Output: A tree with root 3 and left child 1
