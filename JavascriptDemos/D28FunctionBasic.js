/*
Function: is a block of statements that can be called multiple times
Advantages:
1. Reduce the code
2. Reusiblity
3. Modulirity
4. Easy for maintance

Ways to write a function in JS
1. Function Declaration / Literal
2. Function Expression
    a. Annonymous Function
    b. Arrow Function
*/

console.log("----------------- Function Declaration -----------------");
console.log("------------------ Function without parameters and return -------------");

//Body of the function
function sayHello(){
    console.log("Hello from function...");    
}

//Calling the function
sayHello();
sayHello();

/*for(let i = 1; i <= 10; i++)
    sayHello();
*/

console.log("--------------- Function with parameters without return ------------");
function calculateAddition(n1, n2){
    let sum = n1 + n2;
    console.log("Addition: " + sum);    
}

calculateAddition(50, 60);
let no1 = 9, no2 = 8;
calculateAddition(no1, no2);
calculateAddition("Hi", ' Supriya');

/**
 * 
 * @param {number} no 
 */

function calculateSqure(no){
    console.log("Squre: " + (no * no));
}

calculateSqure(6);
calculateSqure("Hi");

console.log("------------ Passing arguments and returning a value -----------");
function calculateMultiplication(n1, n2){
    let ans = n1 * n2;
    return ans;
}

/*
return statement
1. It is used to terminate the function
2. It passes the control back to the calling function
3. It returns single value from the function
4. You may have multiple return statements in a function
*/

let ans = calculateMultiplication(7, 8);
console.log("Multiplication: " + ans);

console.log("Answer: " + calculateMultiplication(5, 6));

/**
 * 
 * @param {string} bName 
 */
function checkBrowser(bName){
    switch (bName.toLowerCase()) {
        case 'chrome':
            console.log("Launching Chrome...");
            return true;
        case 'firefox':
            console.log("Launching Firefox...");
            return true;
        case 'edge':
            console.log("Launching Edge...");
            return true;
        case 'safari':
            console.log("Launching Safari...");
            return true;
        default:
            console.log("Invalid browser...");
            return false;
    }
}

let isBrowserLaunch = checkBrowser('ChRoMe');
if(isBrowserLaunch === true){
    console.log("Please enter URL: ");    
}

console.log("Type of checkBrowser(): " + typeof checkBrowser);


