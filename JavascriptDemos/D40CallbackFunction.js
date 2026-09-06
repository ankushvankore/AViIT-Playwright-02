/*
Call back function / Higher order function
----------------------------------------------
Function which accepts one parmeter as a function.
When any function is passed as a parameter to other function, then
this is called as call back / higher order function
*/

function displayName(fName){
    console.log("Hello, " + fName);    
}

/*function sayHello(callBackFun, fName){
    callBackFun(fName);
}*/

//sayHello(displayName, "Radhika")

function myFunction(fName, fun){
    fun(fName);
}
myFunction("Sarika", displayName);

function addition(n1, n2) {
    console.log("Addition: " + (n1 + n2));
}

function subtraction(n1, n2) {
    console.log("Subtraction: " + (n1 - n2));
}

function multiplication(n1, n2) {
    console.log("Multiplication: " + (n1 * n2));
}

function division(n1, n2) {
    console.log("Division: " + (n1 / n2));
}

function calculation(fun, n1, n2){
    fun(n1, n2);
}

calculation(multiplication, 20, 5);
calculation(division, 40, 8);