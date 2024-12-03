function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  return unique;
}

const input = [1, 2, 2, 3, 4, 4, 5];
const result = removeDuplicates(input);
console.log(result); // Output: [1, 2, 3, 4, 5]
