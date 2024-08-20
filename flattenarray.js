let array = [[1,2],[3,6],[5,7]];
let flattenedArray = array.reduce((acc,curr)=>acc=acc.concat(curr),[]);
console.log(flattenedArray,"Flattened Array");