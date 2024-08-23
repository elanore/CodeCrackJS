(function () {
  let arr = [10, 20, 11, 44];

  function arrayLength(array) {
    let arrlength = 0;
    while (array[arrlength] !== undefined) {
      arrlength++;
    }
    return arrlength;
  }

  console.log("arr length:", arrayLength(arr));
})();
