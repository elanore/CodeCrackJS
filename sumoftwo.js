function findPair(arr, target) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
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
        return; // Exit the function when a pair is found
      }
    }
  }
  console.log("No pair found");
}

let arrynum = [2, 6, 8, 9, 1, 4, 5];
let target = 10;

findPair(arrynum, target);
