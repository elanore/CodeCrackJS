var countNodes = function (root) {
  // Helper function to calculate the height of a tree
  const getHeight = (node) => {
    let height = 0;
    while (node) {
      height++;
      node = node.left; // Go as left as possible to calculate height
    }
    return height;
  };

  // Base case: if the tree is empty, return 0
  if (!root) {
    return 0;
  }

  // Calculate the heights of the leftmost and rightmost branches
  const leftHeight = getHeight(root.left);
  const rightHeight = getHeight(root.right);

  if (leftHeight === rightHeight) {
    // If the left and right subtree have the same height, it means the left subtree is a complete tree
    // Number of nodes in a complete subtree is (2^height - 1) + 1 (root node) + count of right subtree
    return (1 << leftHeight) + countNodes(root.right);
  } else {
    // If the heights are different, the right subtree is a complete tree of one less height
    // Number of nodes in the complete subtree is (2^height - 1) + 1 (root node) + count of left subtree
    return (1 << rightHeight) + countNodes(root.left);
  }
};

// Example 1:
// Input: root = [1,2,3,4,5,6]
// The binary tree structure is:
//       1
//      / \
//     2   3
//    / \  /
//   4   5 6
// Output: 6

// Console Example: You can create a simple tree structure to test the code.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Create the tree nodes
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);

console.log("no of nodes", countNodes(root)); // Output: 6
