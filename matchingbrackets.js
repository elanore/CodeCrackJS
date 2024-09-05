function isValid(s) {
  // Stack to keep track of opening brackets
  let stack = [];

  // Mapping of closing to opening brackets
  const map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Iterate through the string `s`
  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // If it's a closing bracket
    if (char in map) {
      // Pop the top element from the stack, or use a dummy value if the stack is empty
      let topElement = stack.length === 0 ? "#" : stack.pop();

      // Check if the popped element matches the corresponding opening bracket
      if (topElement !== map[char]) {
        return false; // Mismatch found, so it's invalid
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // If the stack is empty at the end, all brackets matched; otherwise, it's invalid
  return stack.length === 0;
}

console.log("is brackets matching 1 ", isValid("({})"));
console.log("is brackets matching 2 ", isValid("({)}"));
