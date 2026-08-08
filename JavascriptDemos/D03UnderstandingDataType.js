/*
Data type - Type of the data which is stored in the variable
JS supports 2 Data types
A. Premetive data types
    1. number - can hold whole number, decimal number and negative number
    2. string - is a collection of characters
    3. boolean
    4. bigInt
    5. symbol
    6. null
    7. undefined
B. Non-Premetive data type
    1. Array
    2. Object
*/

console.log("----------- number data type ------------");

let no1 = 9;
console.log("No1: " + no1);
console.log("Type: " + typeof no1);

let no2 = 96.3;
console.log("No2: " + no2);
console.log("Type: " + typeof no2);

let no3 = -8;
console.log("No3: " + no3);
console.log("Type: " + typeof no3);

console.log("-------------- string data type ---------------");
/*String can be declared in 3 ways
1. ''
2. ""
3. `` - back tick / template string
*/
let str1 = 'Hello, Welcome to JS';
console.log("Str1: " + str1);
console.log("Type: " + typeof str1);

let str2 = "Hi Smita";
console.log("Str2: " + str2);
console.log("Type: " + typeof str2);

let trainerName = "Supriya";
let experience = 2;
let str3 = `Welcome to Playwright sessions
these sessions are conducted by ${trainerName}
having total ${experience} years experience`;
console.log("Str3: " + str3);
console.log("Type: " + typeof str3);

console.log("--------------- boolean data type -------------------");
let isEnabled = true;
console.log("IS Enabled: " + isEnabled);
console.log("Type: " + typeof isEnabled);

let isVisible = false;
console.log("Is Visible: " + isVisible);
console.log("Type: " + typeof isVisible);

console.log("-------------------- null data type ------------------");
let pi = null;
console.log("pi: " + pi);
console.log("Type: " + typeof pi);

console.log("----------------- undefined data type -----------------");
let year;
console.log("Year: " + year);   //undefined
console.log("Type: " + typeof year); //undefined
