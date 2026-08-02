/*
Operators - These are the symbols those are used to perform some operations

Categories
1. Unary Operators
    ++, --, -, !, typeof
2. Binary Operators
    a. Arithmetic Operators
        +, -, /, *, %
    b. Conditional Operators
        <, <=, >, >=, ==(Loose equality), ===(Strict Equality), !=
    c. Logical Operators
        && (and), || (or)
    d. Assignment Operators
        =, +=, -=, *=, /=, %=
3. Ternary Operator
    ?:
*/

console.log("---------- Arithmetic Operators ----------------");
let no1 = 10, no2 = 3;
console.log("Addition: " + no1 + no2);
console.log("Addition: " + (no1 + no2));
console.log("Subtraction: " + (no1 - no2));
console.log("Multiplication: " + (no1 * no2));
console.log("Division: " + (no1 / no2));
console.log("Reminder: " + (no1 % no2));

console.log(100 / 0);       //Infinity
console.log(-9 / 0);        //-Infinity

console.log("10" + 10);     //1010
console.log("100" / 10);    //10
console.log("Hello" / 10);  //NaN - Not a Number
console.log("Hello" / "hi");//NaN

console.log("------------------------ Conditional Operators ---------------");
//Conditional operators used to check the condtion and return true/false
let no3 = 60, no4 = 85;
console.log("no3 > no4: " + (no3 > no4));
console.log("no3 >= no4: " + (no3 >= no4));
console.log("no3 < no4: " + (no3 < no4));
console.log("no3 <= no4: " + (no3 <= no4));

console.log("--------------- Loose and Strict Equality ---------------");
let s1 = "10", s2 = 10;
console.log(s1 == s2);          //true
console.log(s1 === s2);         //false
console.log(100 == 100);        //true

console.log(null == undefined);     //true
console.log(null === undefined);    //false

console.log("------------------- Logical Operators --------------");
/*
c1      c2      && (*)      || (+)
t(1)    t(1)    t           t
t(1)    f(0)    f           t
f(0)    t(1)    f           t
f(0)    f(0)    f           f
*/
let avg = 89.6;
let grade = 'A';
console.log("----------- logical && --------------");

console.log(avg >= 80 && grade == 'A');         //true
console.log(avg >= 80 && grade == 'B');         //false
console.log(avg >= 90 && grade == 'A');         //false
console.log(avg >= 90 && grade == 'B');         //false

console.log("------------------- Logical || --------------");


console.log(avg >= 80 || grade == 'A');         //true
console.log(avg >= 80 || grade == 'B');         //true
console.log(avg >= 90 || grade == 'A');         //true
console.log(avg >= 90 || grade == 'B');         //false

