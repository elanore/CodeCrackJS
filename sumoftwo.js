function findPair(arr, target) {
  // Loop through each element in the array
  for (let i = 0; i < arr.length - 1; i++) {
    // Compare the current element with every other element
    for (let j = i + 1; j < arr.length; j++) {
      // Check if the sum of the two numbers equals the target
      if (arr[i] + arr[j] === target) {
        console.log(
          "Indexes: (" +
            i +
            ", " +
            j +
            ") | Values: (" +
            arr[i] +
            ", " +
            arr[j] +
            ")"
        );
        return; // Exit the function once a pair is found
      }
    }
  }
  // If no pair is found, print this message
  console.log("No pair found");
}

// Input array and target value
let arrynum = [2, 6, 8, 9, 1, 4, 5];
let target = 10;

// Call the function with the array and target
findPair(arrynum, target);
