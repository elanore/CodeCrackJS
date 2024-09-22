var binaryTreePaths = function (root) {
  let result = [];

  // Helper function to build paths recursively
  function constructPaths(node, path) {
    if (node) {
      path += node.val.toString(); // Append the current node's value to the path
      if (!node.left && !node.right) {
        // If it's a leaf node, add path to result
        result.push(path);
      } else {
        // Otherwise, continue with left and right children
        path += "->"; // Append the '->' separator
        constructPaths(node.left, path);
        constructPaths(node.right, path);
      }
    }
  }

  // Start the recursive path construction
  constructPaths(root, "");
  return result;
};

// Example usage:
const root1 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: null,
  },
};

const root2 = {
  val: 1,
  left: null,
  right: null,
};

console.log("binary tree paths", binaryTreePaths(root1)); // Output: ["1->2->5", "1->3"]
console.log("binary tree paths", binaryTreePaths(root2)); // Output: ["1"]
