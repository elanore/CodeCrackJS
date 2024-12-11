function generateRandomotp() {
  const chars = "0123456789";
  let strlength = 6;
  let result = "";
  for (let i = 0; i < strlength; i++) {
    let randNum = Math.floor(Math.random() * chars.length);
    result = result + chars.charAt(randNum); //result = result + chars[randNum]; also can be used
  }
  document.getElementById("otp").innerHTML = result;
}
