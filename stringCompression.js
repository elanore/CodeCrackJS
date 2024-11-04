var compressedString = function (word) {
  let comp = ""; // Initialize empty compressed string

  while (word.length > 0) {
    // Find the character of the current prefix
    let char = word[0];

    // Calculate the prefix length, which is the minimum of 9 or the number of repeating characters
    let count = 0;
    while (count < 9 && count < word.length && word[count] === char) {
      count++;
    }

    // Append the length followed by the character to the compressed string
    comp += count + char;

    // Remove the processed prefix from the word
    word = word.slice(count);
  }

  return comp;
};

// Example usage:
console.log("String compression ", compressedString("abcde"));
console.log("String compression ", compressedString("aaaaaaaaaaaaaabb"));
