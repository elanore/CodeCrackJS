var repeatedSubstringPattern = function (s) {
  // Get the length of the string
  const len = s.length;

  // Loop through possible substring lengths
  for (let i = 1; i <= len / 2; i++) {
    // If the current length can evenly divide the string length
    if (len % i === 0) {
      // Create the substring
      const substring = s.substring(0, i);
      // Create a string by repeating the substring
      const repeated = substring.repeat(len / i);
      // Check if the constructed string is equal to the original
      if (repeated === s) {
        return true;
      }
    }
  }
  return false;
};

// Example usage:
console.log("Repeated patterns", repeatedSubstringPattern("abab")); // Output: true
console.log(repeatedSubstringPattern("aba")); // Output: false
console.log(repeatedSubstringPattern("abcabcabcabc")); // Output: true
