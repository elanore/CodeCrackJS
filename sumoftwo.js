let arrynum = [2, 6, 8, 9, 1, 4, 5];
let target = 10;
let found = false; // Flag to break out of the outer loop

for (let i = 0; i < arrynum.length - 1; i++) {
  for (let j = i + 1; j < arrynum.length; j++) {
    if (arrynum[i] + arrynum[j] === target) {
      console.log(
        `Indexes: (${i}, ${j}) | Values: (${arrynum[i]}, ${arrynum[j]})`
      );
      found = true; // Set the flag to true when a pair is found
      break; // Break out of the inner loop
    }
  }
  if (found) break; // Break out of the outer loop if a pair was found
}
