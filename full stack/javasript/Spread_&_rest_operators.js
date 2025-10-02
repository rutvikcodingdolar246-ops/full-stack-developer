// Spread & rest operators

// In JavaScript, both the spread (...) and rest (...) operators utilize the same syntax but serve distinct purposes.
// Spread Operator (...)
// The spread operator is used to expand elements of an iterable (like an array or string) into individual elements, or to expand properties of an object into a new object.
// rest
// Rest Operator (...)
// The rest operator is used to gather multiple elements into a single array. It is primarily used in function parameters and array/object destructuring. 

// function addNum (a,b,c,...other){
//   console.log(other[1])
//   return a + b + c;
// }
// const res = addNum(2,5,6,8,9)

// Spread 


// var name = ["Ajay","Anuj","Vivek"];

// function get(name1,name2,name3){
// console.log(name1,name2,name3,name4)
// }
// get(...name)


// Object rest 

// var s = {
//   name : "r",
//   age : "22",
//    h : ['c','coding']
// }

// const {age,...rest} = s;
// console.log(rest)

// // spread 

// var news = {
//      ...s,
//      age : "19"
// } 
// console.log(news)


// Ex: 

// 