function isAnagram(s, t) {
  // If lengths are not equal, they can't be anagrams
  if (s.length !== t.length) return false;

  // Sort the characters in both strings and compare
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// Example 1
console.log(isAnagram("anagram", "nagaram")); // Output: true

// Example 2
console.log(isAnagram("rat", "car")); // Output: false
