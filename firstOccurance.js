var strStr = function (haystack, needle) {
  // If needle is an empty string, return 0 as per the problem's constraints.
  if (needle === "") return 0;

  // Use JavaScript's built-in `indexOf` method to find the first occurrence of needle in haystack.
  return haystack.indexOf(needle);
};

console.log("fiirst occurance", strStr("sadbutsad", "sad"));
console.log("fiirst occurance", strStr("leetcode", "leeto"));
console.log("fiirst occurance", strStr("leetcode", "code"));
