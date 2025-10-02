// Template literals, also known as template strings, are a feature introduced in ECMAScript 2015 (ES6) that provide an enhanced way to work with strings in JavaScript. They offer several advantages over traditional string concatenation using single or double quotes.

// Backticks (`` ` ``): Template literals are enclosed within backticks (`` ` ) instead of single ( ' ) or double ( " ``) quotes.
// String Interpolation: They allow for embedding expressions directly within the string using the syntax ${expression}. This eliminates the need for concatenation operators (`` + ``) and improves readability.



// let user = "rutvik"
// let m = "350"
// let h = `Hello ${user} 

//      your mark is ${m}`
// console.log(`${h}`)


let f = "Yahoo";
let l = "b";

function fullname (f,l){
   return `${f} ${l}`; 
}
console.log(fullname(f,l))