let person = {
  firstname: "shiny",
  lastName: "joseph", 
};
 printfullName = function (hometown) {
    console.log(this.firstname + " " + this.lastName+ " "+hometown);
  }
  
printfullName.apply(person,["kanhangad"]);

// //function borrowing 

// let person2 ={
//     firstname:"hello",
//     lastName:"world",
// }
// printfullName.call(person2);


// let printAddress = function(hometown,state){
//     console.log(this.firstname+" "+this.lastName+" from " +hometown+","+ state);
// };

//     printAddress.call(person,"kanhangad","kerala");



// //apply - same arguements are passed as array

// printAddress.apply(person2,["kanhangad","kerala"]);

// //bind method, binds the method and return a copy of the method

// let printmyName= printAddress.bind(person,"kanhangad","kerala");
// console.log(printmyName);
// printmyName();