var findRelativeRanks = function (score) {
  // Create an array of indices sorted by the score values in descending order
  let sortedIndices = [...score.keys()].sort((a, b) => score[b] - score[a]);

  // Initialize the answer array with the same length as the score array
  let answer = new Array(score.length);

  // Iterate through the sorted indices and assign the ranks
  for (let i = 0; i < sortedIndices.length; i++) {
    if (i === 0) {
      answer[sortedIndices[i]] = "Gold Medal";
    } else if (i === 1) {
      answer[sortedIndices[i]] = "Silver Medal";
    } else if (i === 2) {
      answer[sortedIndices[i]] = "Bronze Medal";
    } else {
      answer[sortedIndices[i]] = (i + 1).toString(); // Rank is the (i + 1)-th position
    }
  }

  return answer;
};

// Example
let score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
