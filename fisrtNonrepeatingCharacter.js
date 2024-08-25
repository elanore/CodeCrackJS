function firstNonRepeatingCharacter(str) {
  const charCount = {};
  const lowerStr = str.toLowerCase();
  //count each character in the string
  for (let i = 0; i < lowerStr.length; i++) {
    const char = lowerStr[i];
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  //now find the first non repeative char

  for (let i = 0; i < str.length; i++) {
    const char = lowerStr[i];
    if (charCount[char] === 1) {
      console.log(str[i], " first Non repeating charater"); //return first non-repeating character
      return;
    }
  }
  // all characters repeat
  console.log(null);
}

firstNonRepeatingCharacter("Baby");
