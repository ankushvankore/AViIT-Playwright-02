/*
Function Expression: I can store any function inside a variable, while
calling this function you should use this variable not a function name
*/

console.log("------------- Function Expression ----------------");

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 */

let test1 = function subtraction(n1, n2){
    console.log("Subtraction: " + (n1 - n2));
}

//subtraction(20, 10);        //ReferenceError: subtraction is not defined
test1(20, 10);
console.log("Type is: " + typeof test1);
console.log("Name: " + test1.name);

/**
 * 
 * @param {string} pName 
 * @param {number} price 
 */

let test2 = function printData(pName, price){
    console.log(`Product Name: ${pName} price: ${price}`);
}

test2('Laptop', 50000);

/**
 * 
 * @param {number} no1 
 * @param {number} no2 
 * @param {number} no3 
 */

let test3 = function findMax(no1, no2, no3){
    if(no1 > no2 && no1 > no3){
        return no1;
    }
    else if(no2 > no1 && no2 > no3){
        return no2;
    }
    else{
        return no3;
    }
}

let max = test3(10, 20, 30);
console.log("Max: " + max);
console.log("Max: " + test3(98, 75, 25));
