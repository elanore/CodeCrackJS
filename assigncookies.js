var findContentChildren = function (g, s) {
  // Sort the greed factors and cookie sizes
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let childIndex = 0; // Pointer for the children
  let cookieIndex = 0; // Pointer for the cookies

  // Iterate through both arrays
  while (childIndex < g.length && cookieIndex < s.length) {
    // If the current cookie can satisfy the current child's greed
    if (s[cookieIndex] >= g[childIndex]) {
      // Move to the next child
      childIndex++;
    }
    // Move to the next cookie
    cookieIndex++;
  }

  // The number of content children is the childIndex
  return childIndex;
};

// Example usage:
console.log("assign cookies", findContentChildren([1, 2, 3], [1, 1])); // Output: 1
console.log("assign cookies", findContentChildren([1, 2], [1, 2, 3])); // Output: 2
