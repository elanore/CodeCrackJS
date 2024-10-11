var filter = function (arr, fn) {
  let filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
};

// Example 1 - Encapsulated in a block to avoid variable redeclaration
{
  let arr1 = [0, 10, 20, 30];
  let fn1 = function greaterThan10(n) {
    return n > 10;
  };
  console.log("filter array", filter(arr1, fn1)); // Output: [20, 30]
}

// Example 2 - Encapsulated in a block to avoid variable redeclaration
{
  let arr2 = [1, 2, 3];
  let fn2 = function firstIndex(n, i) {
    return i === 0;
  };
  console.log("filter array", filter(arr2, fn2)); // Output: [1]
}

// Example 3 - Encapsulated in a block to avoid variable redeclaration
{
  let arr3 = [-2, -1, 0, 1, 2];
  let fn3 = function plusOne(n) {
    return n + 1;
  }; // Only truthy values will pass
  console.log("filter array", filter(arr3, fn3)); // Output: [-2, 0, 1, 2]
}
