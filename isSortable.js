// Helper function to count the number of set bits in a binary representation of a number
function countSetBits(num) {
  let count = 0;
  while (num > 0) {
    count += num & 1; // Increment count if the last bit is 1
    num >>= 1; // Shift bits to the right
  }
  return count;
}

// Main function to determine if the array can be sorted
var canSortArray = function (nums) {
  // Create a map to group numbers by their set bit counts
  let bitCountGroups = {};

  // Group numbers by their set bit counts
  for (let num of nums) {
    let setBits = countSetBits(num);
    if (!(setBits in bitCountGroups)) {
      bitCountGroups[setBits] = [];
    }
    bitCountGroups[setBits].push(num);
  }

  // Sort each group individually
  for (let key in bitCountGroups) {
    bitCountGroups[key].sort((a, b) => a - b);
  }

  // Create the sorted version of the original array to compare with
  let sortedNums = [...nums].sort((a, b) => a - b);

  // Reconstruct the sorted array using sorted groups
  let reconstructed = [];
  for (let num of nums) {
    let setBits = countSetBits(num);
    reconstructed.push(bitCountGroups[setBits].shift());
  }

  // Check if reconstructed array matches the fully sorted array
  return JSON.stringify(reconstructed) === JSON.stringify(sortedNums);
};

// Example usage:
console.log("Is sortable", canSortArray([8, 4, 2, 30, 15]));
console.log("Is sortable", canSortArray([1, 2, 3, 4, 5]));
console.log("Is sortable", canSortArray([3, 16, 8, 4, 2]));
