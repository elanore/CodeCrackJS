var canConstruct = function (ransomNote, magazine) {
  let magazineLetters = {};

  // Count each letter in the magazine
  for (let char of magazine) {
    if (!magazineLetters[char]) {
      magazineLetters[char] = 0;
    }
    magazineLetters[char]++;
  }

  // Check if ransomNote can be constructed
  for (let char of ransomNote) {
    if (!magazineLetters[char] || magazineLetters[char] <= 0) {
      return false; // If letter not available or already used up
    }
    magazineLetters[char]--; // Use one occurrence of the letter
  }

  return true;
};

// Example usage:
console.log("ransom", canConstruct("a", "b")); // Output: false
console.log("ransom", canConstruct("aa", "ab")); // Output: false
console.log("ransom", canConstruct("aa", "aab")); // Output: true
