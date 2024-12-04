// Function to check for vowels in a string
function containsVowels(inputString) {
  // Convert the string to lowercase for case-insensitive matching
  const lowerCaseString = inputString.toLowerCase();

  // Regular expression to check for vowels
  const vowelRegex = /[aeiou]/;

  // Test the string for vowels
  if (vowelRegex.test(lowerCaseString)) {
    console.log("The string contains vowels.");
  } else {
    console.log("The string does not contain vowels.");
  }
}

// Get input from the user
//const inputString = prompt("Enter a string to check for vowels:");
containsVowels(inputString);
