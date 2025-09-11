// Functions



// A function is a standalone block of code that can be defined and called independently. It can take input parameters and optionally return a value. Functions promote code reusability and modularity. 

//  ex:- 
// function r (){
//     console.log("Hello World");
//     console.log("I am learning JavaScript");
//     console.log("I am enjoying it");
//     console.log("I will become a pro in JavaScript");
//     console.log("Thank you");
// }

// r();

// function addTwoNumbers(a,b){ // a and b are parameters
//     console.log(a+b);
// }

// addTwoNumbers(10,20);//and 10,20 are arguments



// function p (num1 ,num2){
//   let sum = num1 + num2;
//   return sum;
// }

// const sum = p(34 ,34)

// console.log(sum);




// function p (num1 ,num2){
//  return num1+num2;
// }

// const sum = p(34 ,34)

// console.log(sum);



// function  loginUserMessage(username){
//     if(username === undefined){
//         console.log("Please enter your username");
//         return;
//     }
//   return `${username} joined the login `;
// }
// console.log(loginUserMessage());


// function  loginUserMessage(username = "Sam"){
//     if(!username){
//         console.log("Please enter your username");
//         return;
//     }
//   return `${username} joined the login `;
// }
// console.log(loginUserMessage());


//  arrow function
//Arrow functions, introduced in ES6, provide a concise syntax for writing function expressions in JavaScript. They offer a more compact way to define functions compared to traditional function expressions and have distinct behaviors regarding this binding


// const say = ()=>{
//     console.log("hello world");
// }   
// say();

// const add = (a,b) => {
//     return a + b;
// }
// console.log(add(5,6));

// const add2 = (a,b) => a+b;
// console.log(add2(5,6));

// 'arguments' keyword is not available inside arrow functions. This means that arrow functions do not automatically capture or access the arguments passed to them.
// const addTwoNumbers = (...nums)=>{
//     console.log(nums);
// }

// addTwoNumbers(1,3,44,545,54);


// 3.  Hoisting: Arrow functions are hoisted differently than regular functions. Regular functions are fully hoisted, meaning they can be used before their declaration in the code. However, arrow functions are only partially hoisted; they cannot be accessed before their actual declaration.
// my();
// function my (){
//     console.log("dolar rutvik");
// }


// arrow function not work here


// this keyword


