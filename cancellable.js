var cancellable = function (fn, args, t) {
  // Start a timeout that will call fn with args after t milliseconds
  const timeoutId = setTimeout(() => {
    const result = fn(...args);
    console.log({ time: t, returned: result });
  }, t);

  // Return the cancel function
  return function cancelFn() {
    clearTimeout(timeoutId); // This will cancel the scheduled call to fn
  };
};

// Example usage
// Example 1:
const fn1 = (x) => x * 5;
const args1 = [2];
const delay1 = 20;
const cancelTime1 = 50;

const cancelFn1 = cancellable(fn1, args1, delay1);
setTimeout(cancelFn1, cancelTime1); // Try to cancel after 50ms
// Expected output: { "time": 20, "returned": 10 }

// Example 2:
const fn2 = (x) => x ** 2;
const args2 = [2];
const delay2 = 100;
const cancelTime2 = 50;

const cancelFn2 = cancellable(fn2, args2, delay2);
setTimeout(cancelFn2, cancelTime2); // Try to cancel after 50ms
// Expected output: []

// Example 3:
const fn3 = (x1, x2) => x1 * x2;
const args3 = [2, 4];
const delay3 = 30;
const cancelTime3 = 100;

const cancelFn3 = cancellable(fn3, args3, delay3);
setTimeout(cancelFn3, cancelTime3); // Try to cancel after 100ms
// Expected output: { "time": 30, "returned": 8 }
