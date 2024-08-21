let arr =[1,2,2,5,5,6,9,7,3];
let uniqueArray=[];

for(let i=0;i<arr.length;i++){
    if(uniqueArray.indexOf(arr[i])===-1){
        uniqueArray.push(arr[i]);
    }

}
console.log(uniqueArray,"unique Array");