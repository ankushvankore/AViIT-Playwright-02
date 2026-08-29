class StudentData{
    rollNo;
    stName;
    address;
    marks;

    constructor(rn, nm, ad, mk){
        console.log("Constructor called!!!");
        
        this.rollNo = rn;
        this.stName = nm;
        this.address = ad;
        this.marks = mk;
    }
}

let s1 = new StudentData(101, 'Supriya', 'Nagpur', 89.9);

console.log("Roll No: " + s1.rollNo);
console.log("Student Name: " + s1.stName);
console.log("Address: " + s1.address);
console.log("Marks: " + s1.marks);

console.log("--------------------------");


let s2 = new StudentData(123, "Smita", 'Pune', 78.9);
console.log("Roll No: " + s2.rollNo);
console.log("Student Name: " + s2.stName);
console.log("Address: " + s2.address);
console.log("Marks: " + s2.marks);

