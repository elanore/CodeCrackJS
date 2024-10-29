function cancellable(fn, args, t) {
  // Immediately invoke the function with the provided arguments
  fn(...args);

  // Set up the interval to repeatedly call fn with args every t milliseconds
  const intervalId = setInterval(() => {
    fn(...args);
  }, t);

  // Return the cancel function, which stops the interval when invoked
  return function cancelFn() {
    clearInterval(intervalId);
    console.log("Cancelled");
  };
}

// Example usage and testing:
const fn = (x) => {
  const result = x * 2;
  console.log("interval cancellable", {
    time: Date.now() - startTime,
    returned: result,
  });
  return result;
};
const args = [4];
const intervalTime = 35;
const cancelTimeMs = 190;
const startTime = Date.now(); // Keep track of start time for timing logs

// Get the cancel function
const cancelFn = cancellable(fn, args, intervalTime);

// Set up the cancel function to be called after cancelTimeMs
setTimeout(cancelFn, cancelTimeMs);
