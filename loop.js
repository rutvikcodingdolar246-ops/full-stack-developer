//! Loop
//?  JavaScript loops are control structures that enable the repeated execution of a block of code until a specified condition is met. They are essential for tasks involving iteration over data structures, performing actions multiple times, and automating repetitive processes

const { forwardRef } = require("react");


//!1. Foor 

//? for loop: This is a fundamental loop used when the number of iterations is known or can be determined at the start. It consists of three optional expressions: initialization, condition, and increment/decrement

// for (let i = 0;  i <= 10; i++){
//      const element = i;
//      if (element == 5) {
//         console.log("5 is best number")
//      }
//      console.log(element);
// }

// console.log(element); this not used to element add to 



// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value ${i}`)
//     for (let y = 0; y <=10; y++) {
//         //console.log(`Inner loop vlaue ${y} and inner loop ${i} `);
//           console.log(i + '*' + y + ' = ' + i*y)
//     }
    
// }


// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length)
// for (let i = 0; i < myArray.length; i++) {
//     const er = myArray[i];
//     console.log(er)
// }


//! Break and Continue


// for (let k = 1; k <= 20; k++) {
//     if(k == 5 ){
//         console.log('Detected 5');
//         break
//     }
//     console.log(`Value of i is ${k}`)
    
// }


// for (let k = 1; k <= 20; k++) {
//     if(k == 5 ){
//         console.log('Detected 5');
//         continue
//     }
//     console.log(`Value of i is ${k}`)
    
// }


//! While Loop 

//? while loop: This loop repeatedly executes a block of code as long as a specified condition remains true. The condition is checked before each iteration. 

// let index = 0;
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);
//     index = index + 2
// }

// let myArray = ['flash', 'batman','superman']

// let arr = 0 
// while (arr < myArray.length) {
//     console.log(`Value is ${myArray [arr]}`);
//     arr = arr + 1
// }


 //!3 do while
// let score = 1
//  do{
//       console.log(`Score is ${score}`);
//       score++
//  }while (score <= 10)


// for of 



















// EX:- 