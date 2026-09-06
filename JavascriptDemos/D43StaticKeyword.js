/*
static keyword
static keyword we can apply for both variable and method
anything that is declared as static means that is a common property for all the ojects

all the objects will share the same copy

static members / methods can be accessed only via classname

*/

class Employee{
    empId;
    empName;
    static company;

    constructor(id, nm){
        this.empId = id;
        this.empName = nm
    }

    static setCompany(com){
        this.company = com;
    }
    displayData(){
        console.log("Employee Id  : " + this.empId);
        console.log("Employee Name: " + this.empName);
        console.log("Company Name : " + Employee.company);
        
    }
}

let e1 = new Employee(123, 'Suraj');
Employee.setCompany("AViIT");
e1.displayData();

console.log("--------------------------------------");

let e2 = new Employee(234, "Mukta");
e2.displayData();