var countSegments = function (s) {
  // Split the string by spaces
  var segments = s.split(" ");

  // Initialize a counter for non-empty segments
  var count = 0;

  // Loop through each segment
  for (var i = 0; i < segments.length; i++) {
    // If the segment is not an empty string, increase the counter
    if (segments[i] !== "") {
      count++;
    }
  }

  // Return the number of non-empty segments
  return count;
};

console.log("no of segments ", countSegments("Hello, my name is John")); // Output: 5
console.log("no of segments", countSegments("Hello")); // Output: 1
console.log("no of segments", countSegments("   ")); // Output: 0 (empty string with only spaces)
console.log("no of segments", countSegments("   Hello  World  "));
