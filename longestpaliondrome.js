var longestPalindrome = function (s) {
  // Create a set to track characters with odd occurrences
  var charSet = new Set();
  var maxLength = 0;

  // Iterate through the string
  for (var i = 0; i < s.length; i++) {
    var char = s[i];

    // If the character is already in the set, it means we've seen it twice, so remove it (even count)
    if (charSet.has(char)) {
      charSet.delete(char);
      maxLength += 2; // Since we found a pair, increase the palindrome length by 2
    } else {
      charSet.add(char); // Add the character to the set (odd count)
    }
  }

  // If there are any characters left in the set, we can use one odd character for the center
  if (charSet.size > 0) {
    maxLength += 1;
  }

  return maxLength;
};

// Example usage:
console.log("longest paliondrome index", longestPalindrome("abccccdd")); // Output: 7
console.log(longestPalindrome("a")); // Output: 1
