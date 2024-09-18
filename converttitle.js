var convertToTitle = function (columnNumber) {
  let result = "";

  while (columnNumber > 0) {
    columnNumber--; // Decrease the column number by 1 to make it 0-indexed
    let remainder = columnNumber % 26; // Find the remainder when divided by 26
    result = String.fromCharCode(remainder + 65) + result; // Convert to the corresponding letter and prepend to the result
    columnNumber = Math.floor(columnNumber / 26); // Move to the next place
  }

  return result;
};
console.log("conver to title", convertToTitle(1)); // Output: "A"
console.log("conver to title", convertToTitle(28)); // Output: "AB"
console.log("conver to title", convertToTitle(701)); // Output: "ZY"
console.log("conver to title", convertToTitle(702)); // Output: "ZZ"
console.log("conver to title", convertToTitle(703)); // Output: "AAA"
