/*
Method Overriding - the methods with same name, same return type and same signature
one in base class and another in derived class

With the help of method overriding you are implementing run time polymorphism

Method in base class is overriven in derived class
*/

class A{
    color(){
        console.log("Red...");        
    }
}

class B extends A{
    color(){
        console.log("Blue...");        
    }
}

let a1 = new A();
a1.color();

console.log("-------------------------");

let b1 = new B();
b1.color();
