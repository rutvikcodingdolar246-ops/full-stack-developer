//! Operators 


//? JavaScript uses a variety of operators to perform different types of actions on values and variables. 
//? These are the primary categories of operators in 2026:






//! 1. Arithmetic Operators

//? Used to perform mathematical calculations: 
//? Addition (+): Adds values or concatenates strings.
//? Subtraction (-): Subtracts the right operand from the left.
//? Multiplication (*): Multiplies two operands.
//? Division (/): Divides the left operand by the right.
//? Remainder (%): Returns the integer remainder of division.
//? Exponentiation ():** Calculates base to the power of the exponent.
//? Increment (++) / Decrement (--): Adds or subtracts 1 from a variable. 



//? ex: 

//! (A) Addition (+): 

var a = 23;
var b = 45;
var c = a + b;

console.log(c)


//! (B) Subtraction (-):


var a = 23;
var b = 45;
var c = a - b;

console.log(c)


//! (C) Multiplication (*):

var a = 23;
var b = 45;
var c = a * b;

console.log(c)


//! (D) Division (/):

var a = 23;
var b = 45;
var c = a / b;

console.log(c)


//! (E) Remainder (%):

var a = 23;
var b = 45;
var c = a % b;

console.log(c)



//! (F) Exponentiation (**):

var a = 10;
var b = 3;
var c = a ** b;

console.log(c)


//! (G) Increment (++): 


var a = 10;
var b = 3;
a++;


console.log(a+b)


//! (G) Decrement (--): 


var a = 10;
var b = 3;
a--;


console.log(a+b)






//! 2 Assignment Operators

//? Used to assign values, including shorthand operators that combine an operation with assignment, such as +=, -=, *=, /=, %=, and **=



//! (=)

var a = 10;
var b = 3;
var c = a ** b;

console.log(c)


//! (=+)

var a = 10;
var b = 3;
a += b;

console.log(a)


//! (=-)

var a = 10;
var b = 3;
a -= b;

console.log(a)


//! (=*)

var a = 10;
var b = 3;
a *= b;

console.log(a)


//! (=/)

var a = 10;
var b = 3;
a /= b;

console.log(a)


//! (=%)

var a = 10;
var b = 3;
a %= b;

console.log(a)


//! (=**)

var a = 10;
var b = 3;
a **= b;

console.log(a)





//! (3) Comparison Operators


//? These operators compare values and return true or false. Examples include equal (==), strict equal (===) datatype equal , not equal (!=), strict not equal
// ? (!==)datatype equal, greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=)



//! (==)
var a = 10;
var b = 10;

console.log(a == b)

//! (===)  
// * strict equal (===) datatype equal 

var a = 10;
var b = 3;

console.log(a === b)

//! (!=)
var a = 10;
var b = 3;

console.log(2 != 3)



//! (!==)
var a = 10;
var b = 3;

console.log(2 !== 3)



//! (>)
var a = 10;
var b = 3;

console.log(a > b)


//! (<)
var a = 10;
var b = 3;

console.log(a < b)



//! (>=)
var a = 10;
var b = 10;

console.log(a >= b)


//! (<=)
var a = 56;
var b = 10;

console.log(a >= b)


//! (4) Logical Operators


//? Used to combine conditions. These include logical AND (&&), logical OR (||), logical NOT (!), and the nullish coalescing operator (??) 
//? which returns the right operand if the left is null or undefined




//! (&& And)
var age = 18;


if(age >= 18 && age <= 21){
    console.log("yes your eligible")
}if(age <= 17){
    console.log("age not ")
}


//! (|| Or)
var age = 18;


if(age >= 16 || age <= 21){
    console.log("yes your eligible")
}

//! (! Not)
var age = 18;

if (!(age >= 19)) {
    console.log("Yes, you're eligible");
}



