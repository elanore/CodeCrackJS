function generateRandom() {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let strlength = 8;
  let result = "";
  for (i = 0; i < strlength; i++) {
    let randNum = Math.floor(Math.random() * chars.length);
    result = result + chars.substring(randNum, randNum + 1);
  }
  document.getElementById("randomChar").innerHTML = result;
}
