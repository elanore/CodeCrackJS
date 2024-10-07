var climbStairs = function (n) {
  if (n === 1) return 1;

  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

// Example 1:
let n1 = 2;
console.log(`Number of ways to climb ${n1} steps:`, climbStairs(n1)); // Output: 2

// Example 2:
let n2 = 3;
console.log(`Number of ways to climb ${n2} steps:`, climbStairs(n2)); // Output: 3
