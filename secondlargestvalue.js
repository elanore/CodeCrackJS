const intArray = [1, 5, 6, 7,3, 9];
const largestValue = (arr) => {
  firstLagestValue = Math.max(...arr);
  index = arr.indexOf(firstLagestValue);
  arr.splice(index, 1);
  secondLagestValue = Math.max(...arr);
  //return (firstLagestValue);

  return secondLagestValue;
};
console.log(largestValue(intArray), "second largest value");
