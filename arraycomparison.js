var arr1 = [2, 9, 8, 6, 5];
var arr2 = [2, 8, 9, 5, 6];

// Check if arrays are of the same length and contain the same elements
function areArraysSame(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false; // Lengths don't match
  }

  // Sort both arrays and compare each element
  const sortedArr1 = arr1.slice().sort((a, b) => a - b);
  const sortedArr2 = arr2.slice().sort((a, b) => a - b);

  return sortedArr1.every((val, index) => val === sortedArr2[index]);
}

console.log(areArraysSame(arr1, arr2)); // Output: true
