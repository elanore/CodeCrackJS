var isSubsequence = function (s, t) {
  let sIndex = 0;
  let tIndex = 0;

  // Traverse string t and match characters from s
  while (tIndex < t.length) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    if (sIndex === s.length) {
      return true; // All characters of s found in t
    }
    tIndex++;
  }

  return sIndex === s.length; // Return true if all chars of s were matched
};

// Example 1
const s1 = "abc";
const t1 = "ahbgdc";
console.log("isSubsequence : ", isSubsequence(s1, t1)); // Output: true

// Example 2
const s2 = "axc";
const t2 = "ahbgdc";
console.log("isSubsequence: ", isSubsequence(s2, t2)); // Output: false
