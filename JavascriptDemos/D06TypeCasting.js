/*
Type Casting:
    Process where one data type can be converted into another type

Types:
1. Implicit Casting / Type Coercion
    Conversion that happens automatically
2. Explicit Casting / Manual Casting
    You need to use some external force (method)to cast the data
    1. Number()
    2. Boolean()
    3. String()

===========================
Truthy & Falsy Values in JS
============================
Truthy value
    Any value that is treaed as true in boolean context - this will treat as true
    eg. any non zero no, any non empty string, true
Falsy Values
    Any values that are treated as false in boolean context - this will treat as false
    eg. zero, any empty string, NaN, Undefined, null, false
*/
console.log("----------------------- String Conversion -----------------");

let str1 = "Hello" + 10;
//10 will be coerced with Hello
console.log("Value: " + str1 + " Type: " + typeof str1);
 
let str2 = 100 + "200" + 55;
//200 will be coerced with 100 and then 55 will be coerced with 100200
console.log("Value: " + str2 + " Type: " + typeof str2);

let str3 = 70 + 60 + "Hi";
//First 70 + 60 will happen and the this 130 will be coerced with Hi
console.log("Value: " + str3 + " Type: " + typeof str3);

let str4 = "Smita" + true + 5;
//true & 5 will be coerced with "Smita"
console.log("Value: " + str4 + " Type: " + typeof str4);    //Smitatrue5

console.log("------------------ Number Coercion --------------------");
let no1 = 10 + 10;
console.log("Value: " + no1 + " Type: " + typeof no1);

let no2 = "100" - 10;       //First "100" will be coerced into number and then subtraction will happen
console.log("Value: " + no2 + " Type: " + typeof no2);

let no3 = "56" / "8";       //First 56 & 8 will be coerced into number and then division will happen
console.log("Value: " + no3 + " Type: " + typeof no3);

let no4 = "10" * 5 + "20";  
//First 10 * 5 will happen and then the value will be coerced with "20"
console.log("Value: " + no4 + " Type: " + typeof no4);

let no5 = "Supriya" - 5;
console.log("Value: " + no5 + " Type: " + typeof no5);  //NaN

let no6 = "10" * 5 - 20;  
console.log("Value: " + no6 + " Type: " + typeof no6);

let no7 = "10" * 5 - "30";
console.log("Value: " + no7 + " Type: " + typeof no7);

let no8 = true - 10;        //true is coerced in 1 (number)
console.log("Value: " + no8 + " Type: " + typeof no8);

console.log("------------------ Explicit Casting ------------------");
/*
Expicit casting is done via 
1. Number()
2. String()
3. Boolean()
These are functions / objects for explicit casting
*/

let n1 = "200";
console.log(n1 + 56);

let strToNum = Number(n1);  //Will convert "200" in to number = 200
console.log(typeof strToNum);
console.log(strToNum + 56);

let bill = "Your order total is 456";
let b = bill.split(' ');    //Saperate each word which is having (space)
let amount = b[4];
console.log(bill, typeof amount);
let nAmount = Number(amount);
console.log(bill, typeof nAmount);
let gst = 45.6;
console.log("Total bill: " + (nAmount + gst));

console.log("--------------- String() -------------------");
let str5 = 1000;
console.log("Value: " + str5 + " type: " + typeof str5);
let numToStr = String(str5);    //Will convert number to string
console.log("Value: " + numToStr + " type: " + typeof numToStr);

console.log(str5 + 10);
console.log(numToStr + 10);

/*
===========================
Truthy & Falsy Values in JS
============================
Truthy value
    Any value that is treaed as true in boolean context - this will treat as true
    eg. any non zero no, any non empty string, true
Falsy Values
    Any values that are treated as false in boolean context - this will treat as false
    eg. zero, any empty string, NaN, Undefined, null, false
*/

console.log("--------------- Boolean() -----------------");
console.log(Boolean("Sudharani"));
console.log(Boolean(true));
console.log(Boolean(88));
console.log(Boolean(88.5));
console.log(Boolean(-88));

console.log(Boolean(""));
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(undefined));
console.log(Boolean(null));