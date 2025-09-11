// java script 
// https://developer.mozilla.org/en-US/ reding 
// https://tc39.es/

// DATA TYAPE 


// JavaScript supports several data types, categorized primarily into primitive and non-primitive (or object) types.
// Primitive Data Types: These represent single, immutable values and do not have properties or methods.


// Null	"object"	N/A
// Undefined	"undefined"	N/A
// Boolean	"boolean"	Boolean
// Number	"number"	Number
// BigInt	"bigint"	BigInt
// String	"string"	String
// Symbol	"symbol"	Symbol

"use strict";  // treat all js code as newer version 

// alert(3 + 3)  // we are using nodejs , Not browser 


// console.log(3 + 3)  //  code readability should be high



// let name = "rutvik"
// let age = 18
// let isLoggedIn = false 


// Number => 2 to power 53 
// bigint  
// string  = ""
// Boolean  => true/false 
// null      => standalone value 
// undefined => 
// symbol => unique


// object 


// console.log(typeof "hi")
// console.log(typeof age)
// console.log(typeof null)
// console.log(typeof undefined) // undefined 


// Number:

// Represents both integer and floating-point numbers.
 let a = 23;
 console.log(typeof(a))


// BigInt:
// Represents integers of arbitrary precision, suitable for numbers larger than the Number type can safely represent.

let b = 23556351362
console.log(typeof(b))


// String:
// Represents textual data, enclosed in single or double quotes.

let c = 'dolar rutvik'
console.log(typeof(c))

// Boolean:
// Represents a logical entity with two possible values: true or false.
// Example: true, false


// let d = false;
// let t = true;

// console.log(d)

// Undefined:
// Indicates that a variable has been declared but has not been assigned a value. 
// Example: let x; (x is undefined)

// Null:
//Represents the intentional absence of any object value. It is a primitive value, but typeof null returns "object".
//Example: let y = null;


//Symbol:
// Introduced in ES6, it represents a unique and immutable value, often used as object property keys to avoid naming collisions.
// Example: let id = Symbol('description');


// let id = Symbol('description');



// Non-Primitive Data Type (Object): This is a complex data type that can store collections of data and more complex entities. Objects are mutable and store references to memory locations.
// Object: The fundamental non-primitive type, representing a collection of key-value pairs. Arrays, functions, and other built-in objects are all specialized forms of objects.

//Plain Objects: let person = { name: "Alice", age: 30 };

//Arrays: Ordered collections of values, which can be of different data types. let numbers = [1, 2, 3];


// Functions: Blocks of executable code that can be invoked. function greet() { console.log("Hello!"); }

//Dates, Regular Expressions, Maps, Sets, etc. are also object types.


