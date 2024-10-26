function sumPromises(promise1, promise2) {
  return Promise.all([promise1, promise2]).then(
    ([result1, result2]) => result1 + result2
  );
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

sumPromises(promise1, promise2).then((sum) => console.log(sum)); // Output: 7
