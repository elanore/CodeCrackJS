/**
 * Definition for isBadVersion API.
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */
var isBadVersion = function (version) {
  // This is just a placeholder function, and you will replace this with the actual API logic.
  // For the example, we assume that version 4 is the first bad one.
  const bad = 4;
  return version >= bad;
};

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        right = mid; // The bad version is at mid or earlier.
      } else {
        left = mid + 1; // The bad version must be after mid.
      }
    }

    // When left == right, we have found the first bad version.
    return left;
  };
};

// Example usage:
const findFirstBadVersion = solution(isBadVersion);
const n = 5;
console.log(`The first bad version is: ${findFirstBadVersion(n)}`);
