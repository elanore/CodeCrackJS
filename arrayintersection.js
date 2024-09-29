var intersection = function (arr1, arr2) {
  // Use Set to store unique elements from both arrays
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);

  // Filter elements in set1 that are also in set2
  let result = [...set1].filter((num) => set2.has(num));

  return result;
};

// Example usage
let array1 = [1, 2, 2, 1];
let array2 = [2, 2];
console.log("arrayintersection", intersection(array1, array2)); // Output: [2]

array1 = [4, 9, 5];
array2 = [9, 4, 9, 8, 4];
console.log("arrayintersection", intersection(array1, array2)); // Output: [9, 4]
