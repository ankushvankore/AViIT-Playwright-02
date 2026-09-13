/*
Encapsulation: Process of hiding the data of object.
Wrapping of data and function together in a single unit.

We can declare any member as privte using # 
while accessing any private member you need use getters and setters
*/

class Employee{
    empId;
    empName;
    #basicSalary;       //# means this will become private

    constructor(id, nm){
        this.empId = id;
        this.empName = nm;
    }

    //Getter / Accessor method - used to return private member
    getSalary(){
        return this.#basicSalary;
    }

    //Setter / Mutator method - used to set / assigne value to private member
    setSalary(sal){
        this.#basicSalary = sal;
    }

    displayData(){
        console.log("Employee Name: " + this.empName);
        console.log("Employee Id  : " + this.empId);        
    }
}

let e1 = new Employee(123, "Yashshri");
e1.displayData();
e1.setSalary(78906);
console.log(e1.getSalary());