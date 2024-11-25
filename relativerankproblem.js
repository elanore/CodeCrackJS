function findRelativeRanks(score) {
  // Map indices and scores, then sort by scores in descending order
  let sortedIndices = [...score.keys()].sort((a, b) => score[b] - score[a]);

  // Create the result array with rankings
  let result = new Array(score.length);
  sortedIndices.forEach((index, rank) => {
    result[index] =
      rank === 0
        ? "Gold Medal"
        : rank === 1
        ? "Silver Medal"
        : rank === 2
        ? "Bronze Medal"
        : (rank + 1).toString();
  });

  return result;
}

// Example usage
let score = [10, 3, 8, 9, 4];
console.log(findRelativeRanks(score));
// Output: ["Gold Medal", "5", "Bronze Medal", "Silver Medal", "4"]
