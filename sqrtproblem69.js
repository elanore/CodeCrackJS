var mySqrt = function (x) {
  if (x === 0 || x === 1) {
    return x;
  }

  let left = 1;
  let right = x;
  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // If mid * mid equals x, return mid
    if (mid * mid === x) {
      return mid;
    }

    // If mid * mid is less than x, move the left bound up and store the current mid
    if (mid * mid < x) {
      result = mid;
      left = mid + 1;
    } else {
      // Otherwise, move the right bound down
      right = mid - 1;
    }
  }

  // The result will hold the floor of the square root
  return result;
};

// Example usage:
console.log("Results", mySqrt(4)); // Output: 2
console.log("results", mySqrt(8)); // Output: 2
