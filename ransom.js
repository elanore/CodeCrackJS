var canConstruct = function (ransomNote, magazine) {
  // Convert magazine into an array of characters
  let magazineArray = magazine.split("");

  // Check each letter in ransomNote
  for (let char of ransomNote) {
    let index = magazineArray.indexOf(char); // Find the letter in magazine
    if (index === -1) {
      return false; // Letter not found in magazine
    }
    magazineArray.splice(index, 1); // Remove the used letter
  }

  return true; // All letters found
};

// Example usage:
console.log(canConstruct("a", "b")); // Output: false
console.log(canConstruct("aa", "ab")); // Output: false
console.log(canConstruct("aa", "aab")); // Output: true
