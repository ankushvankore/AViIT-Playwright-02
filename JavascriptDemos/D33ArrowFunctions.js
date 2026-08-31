console.log("------------------ Arrow Function ---------------");

let test1 = ()=>{
    console.log("This is simple arrow function!!!");    
}

test1();

let test2 = ()=>{console.log("This is another way of arrow function...");}
test2();

console.log("------------------ Arrow function with Parameters ---------------");

let test3 = (pName, price)=>{
    console.log("Product Name: " + pName + " price: " + price);
}

test3('Mobile', 20000);

console.log("-------------- Arrow function without {} --------------");
let test4 = ()=> console.log("This is arrow function without {}");

test4();

console.log("----------- Arrow function without {} passing arguments");
let test5 = (n1, n2)=> console.log("Multiplication: " + (n1 * n2));
test5(4, 5);

console.log("--------------- Arrow function without {} returning a value ---------------");
let test6 = (n1, n2)=> n1 / n2;

console.log("Division: " + test6(66,11));

console.log("---------- Arrow function without () & {} ---------------");

let test7 = no => no * no;
console.log("Squre: " + test7(8));

let oddEven = no => no % 2 === 0

let res = oddEven(0);
if(res)
    console.log("This is even no!!!");
else
    console.log("This is odd no!!!");
