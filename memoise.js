function memoize(fn) {
  const cache = new Map(); // Cache to store results
  let callCount = 0; // Counter for actual function calls

  function memoized(...args) {
    const key = JSON.stringify(args); // Unique key for each set of arguments

    if (cache.has(key)) {
      return cache.get(key); // Return cached result if present
    }

    const result = fn(...args); // Call original function and store result
    cache.set(key, result);
    callCount++; // Increment call count for non-cached calls
    return result;
  }

  memoized.getCallCount = () => callCount;
  return memoized;
}

// Test functions with unique names
const sum = (a, b) => a + b;
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));
const factorialCalc = (n) => (n <= 1 ? 1 : n * factorialCalc(n - 1));

// Memoized versions
const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorialCalc);

// Example execution for "sum"
console.log("Sum Example:");
console.log(memoizedSum(2, 2)); // 4, calls sum
console.log(memoizedSum(2, 2)); // 4, returns cached result
console.log(memoizedSum(1, 2)); // 3, calls sum
console.log("Sum Call Count:", memoizedSum.getCallCount()); // 2

// Example execution for "factorial"
console.log("\nFactorial Example:");
console.log(memoizedFactorial(2)); // 2, calls factorial
console.log(memoizedFactorial(3)); // 6, calls factorial
console.log(memoizedFactorial(2)); // 2, returns cached result
console.log("Factorial Call Count:", memoizedFactorial.getCallCount()); // 2

// Example execution for "fib"
console.log("\nFibonacci Example:");
console.log(memoizedFib(5)); // 8, calls fib
console.log("Fib Call Count:", memoizedFib.getCallCount()); // 1
