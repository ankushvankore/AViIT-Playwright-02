import { Vehicle } from "./D45Vehicle.js";

export class Car extends Vehicle{
    start(){
        console.log("Car can start...");        
    }
    refuel(){
        console.log("Car ca refuel...");        
    }
    stop(){
        console.log("Car can stop...");        
    }
}


//Derived class can use the properties of base class but base class cannot use
//properties of derived class

/*let c1 = new Car();
c1.hasBreak();
c1.start();
c1.refuel();
c1.stop();

let v1 = new Vehicle();
v1.hasBreak();
//v1.start();
*/
