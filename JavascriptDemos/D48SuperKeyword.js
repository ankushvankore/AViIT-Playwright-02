class Parent{
    pId = 101;
    constructor(){
        console.log("Parent class constructor called...");        
    }
    parentIncome(){
        console.log("Income of parent: 62000");        
    }
    getPId(){
        return this.pId;
    }
}


class Child extends Parent{
    cId = 202;
    constructor(){
        super();    //This will call constructor of base class
        console.log("Child class constructor called...");        
    }

    childIncome(){
        console.log("Parent Id: " + super.getPId());
        //super will call the method of base class
    }
}

let c1 = new Child();
c1.childIncome();