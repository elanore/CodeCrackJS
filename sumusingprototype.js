// Extend the Array prototype to add a custom sum method
Array.prototype.sum = function () {
  let total = 0; // Initialize total to 0
  for (let i = 0; i < this.length; i++) {
    // Iterate over array elements
    total += this[i]; // Add each element to total
  }
  return total; // Return the computed sum
};

const numbers = [1, 2, 3, 4, 5];
console.log("sum of elements in array is ", numbers.sum());
