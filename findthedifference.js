var findTheDifference = function (s, t) {
  let sumS = 0,
    sumT = 0;

  // Sum up ASCII values of characters in string s
  for (let i = 0; i < s.length; i++) {
    sumS += s.charCodeAt(i);
  }

  // Sum up ASCII values of characters in string t
  for (let i = 0; i < t.length; i++) {
    sumT += t.charCodeAt(i);
  }

  // The difference in sum will give us the added character
  return String.fromCharCode(sumT - sumS);
};

// Example
console.log(findTheDifference("abcd", "abcde")); // Output: "e"
