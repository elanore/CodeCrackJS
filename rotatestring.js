var rotateString = function (s, goal) {
  // Check if both strings are of the same length
  if (s.length !== goal.length) {
    return false;
  }
  // Concatenate s with itself, to simulate all possible rotations
  let doubledString = s + s;
  // Check if goal is a substring of doubledString
  return doubledString.includes(goal);
};

// Example usage
console.log("is rotated string ", rotateString("abcde", "cdeab")); // Output: true
console.log("is rotated string ", rotateString("abcde", "abced")); // Output: false
