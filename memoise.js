function memoize(fn) {
  const cache = {}; // Store results of previous calls

  function memoized(...args) {
    const key = args.join(","); // Combine arguments into a single key

    if (key in cache) {
      return cache[key]; // Return cached result if it exists
    }

    const result = fn(...args); // Compute the result
    cache[key] = result; // Save it in the cache
    return result;
  }

  return memoized;
}

// Test functions
const add = (a, b) => a + b;
const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));

// Memoized versions
const memoizedAdd = memoize(add);
const memoizedFactorial = memoize(factorial);

// Examples
console.log(memoizedAdd(2, 
