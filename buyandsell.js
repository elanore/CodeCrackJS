var maxProfit = function (prices) {
  let minPrice = Infinity; // Initialize the minimum price to infinity
  let maxProfit = 0; // Initialize the maximum profit to 0

  // Iterate through each day's price
  for (let i = 0; i < prices.length; i++) {
    // If the current price is lower than the minimum price, update minPrice
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    // Calculate the potential profit by selling on the current day
    else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }

  // Return the maximum profit found
  return maxProfit;
};

// Example 1: Prices given [7,1,5,3,6,4]
let prices1 = [7, 1, 5, 3, 6, 4];
console.log("Example 1 Output:", maxProfit(prices1)); // Output should be 5

// Example 2: Prices given [7,6,4,3,1]
let prices2 = [7, 6, 4, 3, 1];
console.log("Example 2 Output:", maxProfit(prices2)); // Output should be 0
