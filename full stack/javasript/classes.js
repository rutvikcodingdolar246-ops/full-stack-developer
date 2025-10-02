// Classes  

// JavaScript classes, introduced in ES6, provide a more structured and object-oriented way to create objects with shared properties and methods compared to traditional constructor functions. They serve as blueprints for creating instances (objects) and support key object-oriented principles like inheritance and encapsulation. 

//class keyword: Used to declare a class, followed by the class name (conventionally capitalized).


class  r {
    submit(){
        alert("tarn submitted")
    }
    cencel(){
        alert("This form is cancelled")
    }
}

let rutvik = new r()
let raj = new r()

rutvik.submit()
raj.submit()
rutvik.cencel()