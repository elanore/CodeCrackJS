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

// function reverseFormatString(str) {
//   return str
//     .split(" ")
//     .map((word) => word.charAt(0).toLowerCase() + word.slice(1).toLowerCase())
//     .join("_");
// }

// const reverseString = reverseFormatString("Ui dev hello");
// console.log(reverseString);

//pgm4:Find the occurrence in given array in JavaScript
// function countOccurrence(arr) {
//   const occurenceCount = {};
//   arr.forEach((element) => {
//     occurenceCount[element] = (occurenceCount[element] || 0) + 1;
//   });
//   console.log(occurenceCount);
// }

//   const arr = [1, 5, 4, 3, 2, 2, 6, 1, 7, 2, 3, 8];
//   countOccurrence(arr);

//pgm5: find occurance in given array of objects

// const people = [
//   { name: "shiny", age: 32, gender: "female" },
//   { name: "hello", age: 1, gender: "male" },
//   { name: "happy", age: 4, gender: "male" },
// ];

// function countOccurrence(arr, property) {
//   const occurenceCount = {};
//   arr.forEach((person) => {
//     const value = person[property];
//     occurenceCount[value] = (occurenceCount[value] || 0) + 1;
//   });

//   return occurenceCount;
// }
// const genderCounts = countOccurrence(people, "gender");
// //only male
// // const numberOfMales = genderCounts["male"] || 0;
// // console.log(numberOfMales);
// console.log(genderCounts, "gender Counts");

// const ageCounts = countOccurrence(people,'age');
// console.log(ageCounts,"Age counts");

// age above 18 only
// const people = [
//   { name: "shiny", age: 32, gender: "female" },
//   { name: "hello", age: 1, gender: "male" },
//   { name: "happy", age: 4, gender: "male" },
// ];

// const numberOfAdults = people.reduce((count, person) => {
//   return person.age > 18 ? count + 1 : count;
// }, 0);

// console.log(numberOfAdults);

// OR
// const people = [
//     { name: 'shiny', age: 32, gender: 'female' },
//     { name: 'hello', age: 1, gender: 'male' },
//     { name: 'happy', age: 4, gender: 'male' }
// ];

// // First, filter the people who are older than 18
// const adults = people.filter(person => person.age > 18);

// // Get the count of the filtered adults
// const numberOfAdults = adults.length;

// console.log(numberOfAdults);  // Output: 1
