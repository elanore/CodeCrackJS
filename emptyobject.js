var isEmpty = function (obj) {
  // Check if obj is an array
  if (Array.isArray(obj)) {
    return obj.length === 0;
  }
  // Check if obj is an object
  else if (typeof obj === "object" && obj !== null) {
    return Object.keys(obj).length === 0;
  }
  // Return false for non-object or non-array inputs
  return false;
};

// Test examples
console.log("is empty ", isEmpty({ x: 5, y: 42 })); // Output: false
console.log("is empty ", isEmpty({})); // Output: true
console.log("is empty ", isEmpty([null, false, 0])); // Output: false
console.log("is empty ", isEmpty([])); // Output: true
