var wordPattern = function (pattern, s) {
  // Split the string `s` into an array of words
  let words = s.split(" ");

  // If the length of pattern and words are different, return false
  if (pattern.length !== words.length) {
    return false;
  }

  // Create two maps to store the mappings from pattern to words and vice versa
  let charToWordMap = new Map();
  let wordToCharMap = new Map();

  // Loop through each character in the pattern
  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i];
    let word = words[i];

    // If the current character is already mapped to a word, check for consistency
    if (charToWordMap.has(char)) {
      if (charToWordMap.get(char) !== word) {
        return false;
      }
    } else {
      charToWordMap.set(char, word);
    }

    // If the current word is already mapped to a character, check for consistency
    if (wordToCharMap.has(word)) {
      if (wordToCharMap.get(word) !== char) {
        return false;
      }
    } else {
      wordToCharMap.set(word, char);
    }
  }

  // If all checks pass, the pattern follows the string `s`
  return true;
};

// Test examples
console.log("word pattern problem", wordPattern("abba", "dog cat cat dog")); // Output: true
console.log(wordPattern("abba", "dog cat cat fish")); // Output: false
console.log(wordPattern("aaaa", "dog cat cat dog")); // Output: false
