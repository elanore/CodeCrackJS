var isAnagram = function (s, t) {
  // If the lengths of the two strings are not equal, they can't be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Create frequency maps for both strings
  const charCountS = {};
  const charCountT = {};

  // Populate the frequency maps
  for (let char of s) {
    charCountS[char] = (charCountS[char] || 0) + 1;
  }

  for (let char of t) {
    charCountT[char] = (charCountT[char] || 0) + 1;
  }

  // Compare the frequency maps
  for (let key in charCountS) {
    if (charCountS[key] !== charCountT[key]) {
      return false;
    }
  }

  return true;
};

// Example 1
console.log(isAnagram("anagram", "nagaram")); // Output: true

// Example 2
console.log(isAnagram("rat", "car")); // Output: false
