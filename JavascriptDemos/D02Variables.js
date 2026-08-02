/*
Variable -  is a name given to memory location where some value is stored.
            acts as a container for value

For variable declaration 
1. var - older technique - global scope, inside the function
                if declared inside the function then not accessable outside the function
2. let - the latest technique
3. const - for any constant (immutable) value

Scope - Accessibality of any variable
1. Global scope - accessable anywhere in the program
2. Block scope / Local Variable - accessable only inside the block {}
3. Function scope - accessable only inside the function
*/

var age = 30;
let isActive = true;
const pi = 3.142;

console.log("-------------- Outside the block ---------------");

console.log("Age: " + age);
console.log("Is Active: " + isActive);
console.log("PI: " + pi);

if(true){
    console.log("--------- Inside the block ----------");
    
    console.log("Age: " + age);
    console.log("Is Active: " + isActive);
    console.log("PI: " + pi);

    var n1 = 10;
    let n2 = 20;
    const n3 = 30;
}

console.log(n1);
//console.log(n2);
//console.log(n3);    //n3 is not defined

function myFunction(){
    console.log("----------------- Inside the function --------------");
    
    console.log("Age: " + age);
    console.log("Is Active: " + isActive);
    console.log("PI: " + pi);

    var n4 = 40;
    let n5 = 50;
    const n6 = 60;
}

myFunction();

console.log(n4);
console.log(n5);
console.log(n6);


