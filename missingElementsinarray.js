const arrNum = [1, 2, 4, 6, 7, 9];
const result = [];

function missingVlaue(arr) {
  const minValue = Math.min(...arr);
  const maxValue = Math.max(...arr);
  for (let i = minValue; i < maxValue; i++) {
    if (arr.indexOf(i) < 0) {
      result.push(i);
    }
  }
  return result;
}
console.log(missingVlaue(arrNum), "missingvalue array");
