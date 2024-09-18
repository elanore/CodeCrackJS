var isPalindrome = function (s) {
  // Convert string to lowercase and remove all non-alphanumeric characters
  let cleanedString = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Check if the cleaned string is the same when reversed
  let reversedString = cleanedString.split("").reverse().join("");

  return cleanedString === reversedString;
};

// Example test cases
console.log(isPalindrome("A man, a plan, a canal: Panama")); // Output: true
console.log(isPalindrome("race a car")); // Output: false
console.log(isPalindrome(" ")); // Output: true
