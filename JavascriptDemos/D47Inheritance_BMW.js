import { Car } from "./D46Inheritance_Car.js";

class BMW extends Car{
    autoEngine(){
        console.log("BMW has Auto Engine...");        
    }
}

let c1 = new Car();
c1.start();
c1.refuel();
c1.stop();
//c1.autoEngine();

let b1 = new BMW();
b1.hasBreak();
b1.start();
b1.stop();
b1.refuel();
b1.autoEngine();

console.log("---------------------- Audi -------------------");


class Audi extends Car{
    autoGear(){
        console.log("Audi has Auto Gear...");        
    }
}

let a1 = new Audi();
a1.hasBreak();
a1.start();
a1.refuel();
a1.stop();
a1.autoGear();
//a1.autoEngine();