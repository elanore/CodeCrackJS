//121 reading backward 121 ,no negative number

var isPalindrome = function (x) {
  // If the number is negative or ends with a 0 and is not 0, it can't be a palindrome
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  // Reverse the second half of the number and compare it with the first half
  let reversed = 0;
  while (x > reversed) {
    reversed = reversed * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  // The number is a palindrome if the original first half is equal to the reversed second half
  // or the number is odd and ignoring the middle digit gives a palindrome (e.g., 121)
  return x === reversed || x === Math.floor(reversed / 10);
};

console.log(isPalindrome(121), "palindrome1");
console.log(isPalindrome(1231), "palindrome2");
