const intArray = [1, 2, 3, 6, 7, 9];

const findSecondLargest = (intArray) => {
  const maxValue = Math.max(...intArray); // Find the largest value

  const filteredArray = intArray.filter((num) => num !== maxValue); // Filter out the largest value

  const secondLargest = Math.max(...filteredArray); // Find the largest in the filtered array

  console.log("Second largest value is", secondLargest);
};

findSecondLargest(intArray);
