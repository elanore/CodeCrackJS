var reverseString = function (s) {
  // Two pointers approach: one starts from the beginning, the other from the end
  let left = 0;
  let right = s.length - 1;

  // Swap the characters at the two pointers until they meet in the middle
  while (left < right) {
    // Swap the characters at left and right indices
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;

    // Move the pointers towards the center
    left++;
    right--;
  }
};
