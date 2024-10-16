function firstUniqChar(s) {
  // Step 1: Create an object to store character frequencies
  let charCount = {};

  // Step 2: Loop through the string to count occurrences of each character
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    // If character already exists in object, increment its count
    if (charCount[char]) {
      charCount[char] += 1;
    } else {
      // Otherwise, set count to 1 for first occurrence
      charCount[char] = 1;
    }
  }

  // Step 3: Loop through the string again to find the first unique character
  for (let i = 0; i < s.length; i++) {
    // If character has a count of 1, return its index
    if (charCount[s[i]] === 1) {
      return i;
    }
  }

  // Step 4: If no unique character found, return -1
  return -1;
}

// Example 1
console.log("first unique char index is", firstUniqChar("leetcode")); // Output: 0

// Example 2
console.log("first unique char index is", firstUniqChar("loveleetcode")); // Output: 2

// Example 3
console.log("first unique char index is", firstUniqChar("aabb")); // Output: -1
