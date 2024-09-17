var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--]);
    if (j >= 0) sum += parseInt(b[j--]);

    result = (sum % 2) + result; // append the remainder (either 0 or 1)
    carry = Math.floor(sum / 2); // update the carry
  }

  return result;
};

var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(a[i--]);
    if (j >= 0) sum += parseInt(b[j--]);

    result = (sum % 2) + result; // append the remainder (either 0 or 1)
    carry = Math.floor(sum / 2); // update the carry
  }

  return result;
};


console.log("sum of strings in binary", addBinary("1010", "1011"));
