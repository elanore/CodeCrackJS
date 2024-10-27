// Define the asynchronous sleep function
async function sleep(millis) {
  return new Promise((resolve) => setTimeout(resolve, millis));
}

// Example usage:
let t = Date.now();

sleep(100).then(() => {
  console.log("sleep", Date.now() - t); // Should log approximately 100
});

sleep(200).then(() => {
  console.log("sleep", Date.now() - t); // Should log approximately 200
});
