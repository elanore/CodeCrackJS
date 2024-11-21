var generate = function (numRows) {
  let triangle = [];

  for (let i = 0; i < numRows; i++) {
    let row = Array(i + 1).fill(1); // Create a row filled with 1s

    for (let j = 1; j < i; j++) {
      // Compute non-border values from the previous row
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row); // Add the row to the triangle
  }

  return triangle;
};

console.log("pascals triangle", generate(5)); // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
console.log(generate(1)); // [[1]]
var generate = function (numRows) {
  let triangle = [];

  for (let i = 0; i < numRows; i++) {
    let row = Array(i + 1).fill(1); // Create a row filled with 1s

    for (let j = 1; j < i; j++) {
      // Compute non-border values from the previous row
      row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }

    triangle.push(row); // Add the row to the triangle
  }

  return triangle;
};

console.log("pascals triangle", generate(5)); // [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]]
console.log(generate(1)); // [[1]]
