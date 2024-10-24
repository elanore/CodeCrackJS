var once = function (fn) {
  let called = false; // This will track if the function has been called or not
  let result; // This will store the result of the first call

  return function (...args) {
    // The new function that will be called
    if (!called) {
      // If it hasn't been called yet
      result = fn(...args); // Call the original function and save the result
      called = true; // Mark it as called
      return result; // Return the result of fn
    }
    return undefined; // If called again, return undefined
  };
};

// Example 1: Adding three numbers
const add = (a, b, c) => a + b + c;
const onceAdd = once(add);

console.log("output", onceAdd(1, 2, 3)); // First time: Output will be 6
console.log("output", onceAdd(2, 3, 6)); // Second time: Output will be undefined
