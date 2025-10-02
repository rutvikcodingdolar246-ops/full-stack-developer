// avaScript employs a unique inheritance model known as prototypal inheritance, which differs from the class-based inheritance found in many other object-oriented languages. While ES6 introduced class syntax, this is primarily syntactic sugar over the existing prototypal inheritance mechanism.


// Instead of classes acting as blueprints for objects, JavaScript objects directly inherit properties and methods from other objects through a prototype chain.
// Every object has a private property, [[Prototype]], which links to another object called its prototype. This prototype object can have its own prototype, forming a chain that ends with null.
// When a property or method is accessed on an object, JavaScript first checks if the object itself has it. If not, it traverses up the proto






// class e {
//     constructor(name,age,salary){
//         this.e1 = name;
//         this.empage = age;
//         this.empsalary = salary;
//         console.log("constructor : Employee")
//     }
//     info(){
//         console.log(`<h3>Employee Class</h3>
//             Name : ${this.e1}<br> 
//             Age : ${this.empage}<br>
//             Salary : ${this.empsalary}<br>`);
//     }
// }
// class m extends e{
//  info(){
//     let ta = 1000;
//     let pa = 300;
//     let to = this.empsalary+ ta + pa; 
//         console.log(`<h3>Manager Class</h3>
//             Name : ${this.e1}<br> 
//             Age : ${this.empage}<br>
//             Salary : ${this.empsalary}<br>`);
//     }

// }
// class t extends m{

// }

// let a = new t("rutvik", 25, 20000);
// // let b = new e ("ram", 23, 120000);
// a.info();
// // b.info();



// ex 


// class p {
//     constructor(name){
//         this.name = name;
//     }
//     greet(){
//         console.log(`hello, my name is ${this.name}.`);
//     }

// }

// class s extends p {
//     constructor(name,sid){
//         super(name);
//         this.sid = sid;
//     }
//     study(){
//         console.log(`${this.name} (ID : ${this.sid}) is studying`);
//     }
// }

// const p1 = new p("Alice");
// const s1 = new s ("Bob", "S12345");

// p1.greet();
// s1.greet();
// s1.study();

// console.log(s1 instanceof s);
// console.log(s1 instanceof p)




// // Parent Class
// class Vehicle {
//   // The constructor initializes properties for the vehicle
//   constructor(brand) {
//     this.brand = brand;
//   }

//   // A method shared by all vehicles
//   honk() {
//     return `${this.brand} goes 'Honk Honk!'`;
//   }
// }

// Child Class
// The `extends` keyword establishes the inheritance relationship
// class Car extends Vehicle {
//   // A child class constructor must call `super()` first
//   constructor(brand, model) {
//     super(brand); // Calls the parent constructor to set the 'brand'
//     this.model = model; // Adds a new property specific to the car
//   }

//   // A new method specific to the Car class
//   drive() {
//     return `Driving the ${this.brand} ${this.model}.`;
//   }

//   // A method that overrides the parent's `honk()` method
//   honk() {
//     // Uses `super.honk()` to call the parent's method
//     return super.honk() + " Beep! Beep!";
//   }
// }

// // Create an instance of the Car class
// const myCar = new Car("Ford", "Mustang");

// // Access inherited properties
// console.log(myCar.brand); // Output: Ford

// // Call the inherited method
// console.log(myCar.drive()); // Output: Driving the Ford Mustang.

// // Call the overridden method
// console.log(myCar.honk()); // Output: Ford goes 'Honk Honk!' Beep! Beep!
