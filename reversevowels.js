var reverseVowels = function (s) {
  // Convert the string to an array for easy manipulation
  let strArray = s.split("");

  // Set of vowels for quick lookup, including both lowercase and uppercase vowels
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  // Two pointers approach, one at the start, the other at the end
  let left = 0;
  let right = strArray.length - 1;

  // While left pointer is less than right pointer
  while (left < right) {
    // Move left pointer to the next vowel
    while (left < right && !vowels.has(strArray[left])) {
      left++;
    }

    // Move right pointer to the previous vowel
    while (left < right && !vowels.has(strArray[right])) {
      right--;
    }

    // Swap the vowels at left and right pointers
    [strArray[left], strArray[right]] = [strArray[right], strArray[left]];

    // Move both pointers
    left++;
    right--;
  }

  // Join the array back into a string and return it
  return strArray.join("");
};

// Example 1
console.log(reverseVowels("IceCreAm")); // Output: "AceCreIm"

// Example 2
console.log(reverseVowels("leetcode")); // Output: "leotcede"
