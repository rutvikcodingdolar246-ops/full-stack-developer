// Destructuring in JavaScript is a powerful feature that allows you to unpack values from arrays or properties from objects into distinct variables. This syntax, introduced in ECMAScript 2015 (ES6), provides a more concise and readable way to extract data compared to traditional methods.


// 1. Array Destructuring:
// Array destructuring allows you to extract elements from an array and assign them to individual variables based on their position (index).

// 2. Object Destructuring:
// Object destructuring allows you to extract properties from an object and assign them to variables with the same name as the property.


// const getuser =()=>{return "rutvik"}
// const users =["rutvik","raj","het","Dharmik", getuser]
// const[x1,x2,x3,x4,x5]=users;   //... reming value 
// console.log(x5())

// const obj = {
//     name:"dolar",
//     age : "29",
//     city : "noida",
//     getco:()=> {return "india"}
// }
// const {age,getco,...other} = obj ;
// console.log(getco());