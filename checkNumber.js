function checkNumberSign(number) {
  const sign = Math.sign(number);

  if (sign === 1) {
    console.log(`${number} is positive.`);
  } else if (sign === -1) {
    console.log(`${number} is negative.`);
  } else if (sign === 0) {
    console.log(`${number} is zero.`);
  } else {
    console.log(`${number} is not a valid number.`);
  }
}

// Test the function
checkNumberSign(10); // Output: 10 is positive.
checkNumberSign(-5); // Output: -5 is negative.
checkNumberSign(0); // Output: 0 is zero.
