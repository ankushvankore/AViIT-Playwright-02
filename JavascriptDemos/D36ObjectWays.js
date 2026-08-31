console.log("------------------ Literal Way ----------------");
let person = {
    pName: 'Yatish',
    isEmployee: true,
    address: 'Mumbai',
    adharId: 1234567890,

    printData: function(){
        console.log("Name: " + this.pName);
        console.log("Is Employee: " + this.isEmployee);
        console.log("Address: " + this.address);
        console.log("Adhar Id: " + this.adharId);
    }
}

person.printData();

console.log("--------------- Class Way ---------------");
class Fruits{
    constructor(fn, pr){
        this.fruitName = fn;
        this.price = pr;
    }
    getDetails(){
        console.log("Fruit NAme: " + this.fruitName);
        console.log("Price     : " + this.price);
    }
}

let f1 = new Fruits('Apple', 250);
f1.getDetails();

console.log("------------------- Constructor Function ----------------");
function Employee(id, nm){
    this.empId = id;
    this.empName = nm;

    this.print = function(){
        console.log("Employee Id  : " + this.empId);
        console.log("Employee Name: " + this.empName);
    }
}
let e1 = new Employee(234, 'Sarang');
e1.print();

console.log("------------- Prototype based object -----------------");
let browser = {
    bName: 'Chrome',
    version: 140,
    isIncognito: true,

    browserDetails: function(){
        console.log("Browser Name: " + this.bName);
        console.log("Version     : " + this.version);
        console.log("Is Incognito: " + this.isIncognito);
    }
}

browser.browserDetails();

let u1 = Object.create(browser);
u1.browserDetails();