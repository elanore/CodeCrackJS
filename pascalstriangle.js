var generate = function (numRows) {
  // Initialize an array to hold the triangle
  let triangle = [];

  // Loop through each row
  for (let i = 0; i < numRows; i++) {
    // Initialize a new row with 1
    let row = [1];

    // Loop through the previous row to calculate the current row's values
    for (let j = 1; j < i; j++) {
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    // Add 1 at the end of the row if it's not the first row
    if (i > 0) {
      row.push(1);
    }

    // Add the row to the triangle
    triangle.push(row);
  }

  // Return the triangle
  return triangle;
};

// Call the function and log the output to the console
console.log("pascals triangle", generate(5));
// Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]

console.log(generate(1));
// Output: [[1]]
