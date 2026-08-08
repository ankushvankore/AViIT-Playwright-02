/*
Hoisting in JS
It the concept where you can use any variable before declaration
only var varaiables can be hoisted
let and const are not hoisted

Talking about functions
only function declaration / function literal can be hoisted
Anonymous functions and arrow functions cannot be hoisted
*/

let no = 10;
console.log(no);

//Reference error as variable is used before declaration
//console.log("User Name: " + userName);
//let userName = "Satish";    

console.log("Browser: " + browserName);
var browserName = "Chrome";

//Calling function
myFunction();

function myFunction(){
    console.log("This is my function!!!");    
}