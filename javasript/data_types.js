//! Data Types


 //? JavaScript has eight data types, which are categorized into seven primitive types and one complex 
 //? type: Object. JavaScript is a dynamically typed language, meaning a variable's data type is 
 //? determined at runtime and can change. 


//! 1. Primitive Data Types  

 //! 1. String: 
 //? Represents textual data as a sequence of characters, 
 //? enclosed in single quotes (' '), double quotes (" "), or backticks (`).

 //? Ex:   

 var x = "Rutvik"; 
 console.log(typeof x)


 //! 2. Number:
 //? Represents both integer and floating-point numbers. It includes special values 
 //? like Infinity, -Infinity, and NaN (Not a Number).

 //? Ex:   

 var x = 25;
  console.log(typeof x)
 
 //! 3. Boolean: 
 //? Represents a logical entity and has only two possible values: true or false

 //? Ex:   

 var x = true;
 console.log(x)

//! 4. Undefined: 
//? Automatically assigned to variables that have been declared but not assigned an initial value.

//? Ex:   

 var x;
 console.log(x)

 //! 5. Null: 
 //? A special value that represents the intentional absence of any object value. It must be explicitly
 //?  set by a developer.



 //! 6. Symbol:
 //?  A unique and immutable primitive value (introduced in ES6) often used as an identifier for
 //?  object properties to avoid name clashes. 


//! 2 Complex Data Type  


//! 1.Arrays: 
//? Special objects for storing ordered collections of values, accessed by a numerical  index
//?  (e.g., [1, 2, 3]).


//? Ex:   

 var x = ["HTML","CSS","JS"];
 console.log(x)

 //! 2. Object:
 //?  The single non-primitive data type. Everything else in JavaScript that is not a primitive is an 
 //? object.

 //? Ex:   

 var x = {first:"jane", lat:"Doe"};
 console.log(x)

 //! 3. Functions:
 //? First-class objects that contain reusable blocks of code designed to perform a specific task.


 //! 4. Dates, Regular Expressions, Maps, Sets: Other built-in, specialized objects for handling dates, patterns, and collections. 
