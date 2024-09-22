var wordPattern = function (pattern, s) {
  // Split the string s into an array of words
  let words = s.split(" ");

  // If the number of words doesn't match the pattern's length, return false
  if (pattern.length !== words.length) {
    return false;
  }

  // Create two maps: one for pattern-to-word and one for word-to-pattern
  let patternToWord = {};
  let wordToPattern = {};

  // Loop through the pattern and words at the same time
  for (let i = 0; i < pattern.length; i++) {
    let letter = pattern[i];
    let word = words[i];

    // Check if the letter is already mapped to a word
    if (patternToWord[letter]) {
      // If the current word doesn't match the previously mapped word, return false
      if (patternToWord[letter] !== word) {
        return false;
      }
    } else {
      // If the word is already mapped to another letter, return false
      if (wordToPattern[word]) {
        return false;
      }
      // Create a new mapping from the letter to the word
      patternToWord[letter] = word;
      wordToPattern[word] = letter;
    }
  }

  // If all mappings are valid, return true
  return true;
};

// Test examples
console.log("word pattern problem", wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
