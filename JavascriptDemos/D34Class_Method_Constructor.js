/*
In JS function and method are completly different.
function is something that performs any operation

but whenever you are writing any function inside a class
such a function is called as method
*/
class StudentData{
    rollNo;
    stName;

    constructor(rn, sn){
        this.rollNo = rn;
        this.stName = sn;
    }
    //dont' write keyword function
    //here displayData() is method not a function
    displayData(){
        console.log("Student Name: " + this.stName);
        console.log("Roll No     : " + this.rollNo);
    }
}

let s1 = new StudentData(101, 'Sharvari');
s1.displayData();
