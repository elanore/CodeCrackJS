var getRow = function (rowIndex) {
  // Initialize the first row of Pascal's triangle
  let row = [1];

  // Loop through each row until we reach rowIndex
  for (let i = 1; i <= rowIndex; i++) {
    // Create a new row by adding two consecutive elements from the previous row
    // We use an array with length i+1 and set the first and last element to 1
    for (let j = i - 1; j > 0; j--) {
      row[j] = row[j] + row[j - 1];
    }
    row.push(1); // Append 1 at the end for the new row
  }

  return row;
};

// Example 1:
console.log("pascals2", getRow(3)); // Output: [1, 3, 3, 1]

// Example 2:
console.log(getRow(0)); // Output: [1]

// Example 3:
console.log(getRow(1)); // Output: [1, 1]
