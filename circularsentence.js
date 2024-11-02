var isCircularSentence = function (sentence) {
  // Split the sentence into words
  const words = sentence.split(" ");
  console.log("Words:", words); // Log the split words

  // Check if the last character of each word matches the first character of the next word
  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];
    const nextWord = words[(i + 1) % words.length]; // wrap-around to the first word

    // Log current and next word's characters being compared
    console.log(
      "Comparing:",
      currentWord[currentWord.length - 1],
      "with",
      nextWord[0]
    );

    if (currentWord[currentWord.length - 1] !== nextWord[0]) {
      return false;
    }
  }

  return true;
};

console.log(
  "is circular sentence 1:",
  isCircularSentence("leetcode exercises sound delightful")
); // Expected: true

console.log("is circular sentence 2:", isCircularSentence("leetcode leetcode")); // Expected: false
console.log("is circular sentence 3:", isCircularSentence("Leetcode is cool")); // Expected: false
//The last character "e" of the first "leetcode" does not match the first character "l" of the second "leetcode".