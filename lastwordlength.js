var lengthOfLastWord = function (s) {
  // Trim the string to remove leading and trailing spaces
  s = s.trim();

  // Split the string by spaces into an array of words
  let words = s.split(" ");

  // Get the last word in the array
  let lastWord = words[words.length - 1];

  // Return the length of the last word
  return lastWord.length;
};

// Example Usage:
console.log("last word length", lengthOfLastWord("Hello World")); // Output: 5
console.log("last word length", lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log("last word length", lengthOfLastWord("luffy is still joyboy")); // Output: 6
