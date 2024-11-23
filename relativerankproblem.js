function findRelativeRanks(score) {
  // Step 1: Get the sorted indices based on scores (highest first)
  let sortedIndices = score
    .map((value, index) => index) // Create an array of indices
    .sort((a, b) => score[b] - score[a]); // Sort indices by scores in descending order

  // Step 2: Create an empty array for the results
  let result = new Array(score.length);

  // Step 3: Assign ranks based on sorted order
  for (let i = 0; i < sortedIndices.length; i++) {
    if (i === 0) {
      result[sortedIndices[i]] = "Gold Medal";
    } else if (i === 1) {
      result[sortedIndices[i]] = "Silver Medal";
    } else if (i === 2) {
      result[sortedIndices[i]] = "Bronze Medal";
    } else {
      result[sortedIndices[i]] = (i + 1).toString(); // Convert rank to string
    }
  }

  // Step 4: Return the result
  return result;
}

// Example usage
let score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));
// Output: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
