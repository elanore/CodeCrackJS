var compose = function (functions) {
  // Return a new function
  return function (x) {
    // Start with the initial value of x
    let result = x;

    // Iterate over the functions array from right to left
    for (let i = functions.length - 1; i >= 0; i--) {
      // Apply each function to the current result
      result = functions[i](result);
    }

    // Return the final result after applying all functions
    return result;
  };
};

let functions1 = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
let composedFunction1 = compose(functions1);
console.log("function composition", composedFunction1(4));
