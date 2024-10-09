function createCounter(init) {
  // Store the current value and the initial value
  let currentValue = init;

  // Return an object with three methods: increment, decrement, and reset
  return {
    // Increment the value by 1 and return the new value
    increment: function () {
      currentValue += 1;
      return currentValue;
    },
    // Decrement the value by 1 and return the new value
    decrement: function () {
      currentValue -= 1;
      return currentValue;
    },
    // Reset the value to the initial value and return it
    reset: function () {
      currentValue = init;
      return currentValue;
    },
  };
}

// Example 1:
const counter1 = createCounter(5);
console.log("counter2", counter1.increment()); // 6
console.log(counter1.reset()); // 5
console.log(counter1.decrement()); // 4

// Example 2:
const counter2 = createCounter(0);
console.log("counter2", counter2.increment()); // 1
console.log(counter2.increment()); // 2
console.log(counter2.decrement()); // 1
console.log(counter2.reset()); // 0
console.log(counter2.reset()); // 0
