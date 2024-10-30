var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((resolve, reject) => {
      // Start a timer to reject if time limit is reached
      const timer = setTimeout(() => {
        reject("Time Limit Exceeded");
      }, t);

      // Attempt to resolve the original async function
      fn(...args)
        .then((result) => {
          clearTimeout(timer); // Clear timer if successful
          resolve(result);
        })
        .catch((error) => {
          clearTimeout(timer); // Clear timer if error in fn
          reject(error);
        });
    });
  };
};
// Example 1
const fn = async (n) => {
  await new Promise((res) => setTimeout(res, 100));
  return n * n;
};
const limited = timeLimit(fn, 50);
const start = performance.now();

limited(5)
  .then((result) => {
    console.log({
      resolved: result,
      time: Math.floor(performance.now() - start),
    });
  })
  .catch((error) => {
    console.log({
      rejected: error,
      time: Math.floor(performance.now() - start),
    });
  });
