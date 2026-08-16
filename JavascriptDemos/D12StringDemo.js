/*
String in JS
- Collection of characters
- String in JS is immutable
- String is a premetive type as well as object in JS

Ways to declare a string
let s1 = 'Single Quote';
let s2 = "Double Quote";
let s3 = `Template String`;
*/

let s1 = "Hello";
console.log(s1);

console.log("--------------- String is Immutable -------------------");
let s2 = "Welcome to Javascript";
console.log(s2[2]);
s2[2] = 'L';
console.log(s2);
s2 = "This is string!!!"
console.log(s2);

console.log("-------------- Length of String -----------------");
let s3 = "This is JS String";
console.log("Length of string: " + s3.length);

console.log("Upper case String: " + s3.toUpperCase());
console.log("Lower case String: " + s3.toLowerCase());

console.log("------------- trim() function -----------------");
//trim() will remove the white spaces before and after the string
let s4 = "   Account & Lists    ";
console.log(s4);
console.log(s4.trim());

console.log("---------------- charAt() -----------------");
console.log("Character at index: 5: " + s4.charAt(5));

console.log("--------------- indexOf() -----------------");
console.log("Index of &: " + s4.indexOf('&'));

console.log("----------------- lastIndexOf() -----------------");
console.log("Index of s: " + s4.lastIndexOf('s'));

console.log("----------------- find 2nd occurance -------------");
let s5 = "This is Javascript string";
let i = s5.indexOf('s');
//console.log("Second Index of s: " + s5.indexOf('s', i+1));
console.log("Second index of s: " + s5.indexOf('s', s5.indexOf('s')+1));

console.log("------------------------ concat() ----------------");
let str1 = 'Hello', str2 = 'friends';
console.log(str1 + str2);
console.log(str1.concat(str2));

console.log("--------------------- includes() ------------------");
let str3 = "Playwright is one of the automation testing tool for testing web based applications";
console.log("Contains Playwright: " + str3.includes("Playwright"));
console.log("Contains playwright: " + str3.includes("playwright"));

console.log("------------------- startsWith() --------------");
console.log("String starting with Playwright: " + str3.startsWith("Playwright"));
console.log("String starting with Play: " + str3.startsWith("Play"));
console.log("String starting with wright: " + str3.startsWith("wright"));

console.log("-------------- endsWith() ------------------");
console.log("String ends with applications: " + str3.endsWith('applications'));

console.log("------------------- replace() ---------------");
console.log("Replacing testing: " + str3.replace('testing', 'TESTING'));

console.log("--------------- replaceAll() ----------------");
console.log("Replaceing all testing: " + str3.replaceAll('testing', '******'));

console.log("-------------------- split() ----------------");
let fruits = 'Apple,Banana,Orange,Grapes,Dates,Watermelon';
let spFruits = fruits.split(',');
console.log(spFruits);

let str4 = 'Upto ₹2,000.00 discount on select Credit Cards, SBIBank';
let words = str4.split(' ');
console.log(words);
console.log("Price: " + words[1]);
