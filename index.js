//program 1- find missing elements in an array based on count
// let arr = [3, 7, 8];
// count = 11;
// output = [];
// for (let i = 1; i < count; i++) {
//   !arr.includes(i) ? output.push(i) : "";
// }
// console.log(output);

//program 2 - Replace underscores with space and capitalize word
// function formatString(str) {
//   return str
//     .split("_")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// const formattedString = formatString("ui_dev_hello");
// console.log(formattedString);

//program 3- viceversa of above scenario

function reverseFormatString(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase())
    .join("_");
}

const reverseString = reverseFormatString("Ui dev hello");
console.log(reverseString);
