var makeFancyString = function (s) {
  var result = ""; // Initialize an empty string to store the result
  var count = 1; // Initialize count to keep track of consecutive characters

  // Add the first character to the result as a starting point
  result += s[0];

  for (var i = 1; i < s.length; i++) {
    // Check if the current character is the same as the previous one
    if (s[i] === s[i - 1]) {
      count += 1; // Increment count for consecutive characters
    } else {
      count = 1; // Reset count if characters are not the same
    }

    // Only add the character if count is less than 3
    if (count < 3) {
      result += s[i];
    }
  }

  return result;
};

console.log("fancy string output", makeFancyString("sssshiny"));
