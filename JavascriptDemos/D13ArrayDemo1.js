/*
Array in JS: It is collection of elements
Ways of Array decl
1. Literal Way
2. Array.of()
3. Using constructor

Every array element in identified with index
Index is
- Zero based
- Positive
- Integer number

*/
console.log("--------------- Array Leteral Way --------------");

let arr1 = [];
console.log(arr1);
console.log("Type: " + typeof arr1);
console.log("Size / Length: " + arr1.length);

console.log("------------------------------");
let numbers = [10, 11, 12, 13, 14, 15];
console.log(numbers);
console.log("Length: " + numbers.length);
console.log(numbers[3]);
console.log(numbers[8]);

console.log("---------------- Array of different data types -----------");
let user = [123, 'Supriya', 'Mehar', 'Delhi', 3099.23, 75000];
console.log(user);
console.log("Length: " + user.length);
console.log("Salary: " + user[5]);
console.log(user.indexOf(75000));

console.log("---------------- Array using Constructor ------------------");
let citis = new Array('Kolhapur', 'Sangali', 'Chandrapur', 'Bhandra', 'Delhi', 'Pune', 'Mumbai');
console.log(citis);
console.log('Size: ' + citis.length);

console.log("----------------- Array Of numbers --------------");

let arr2 = new Array(10, 20, 30, 40, 50);
console.log(arr2);
console.log("Size:" + arr2.length);

console.log("--------------------- Array declaration with size ----------------");
let arr3 = new Array(5);
console.log(arr3);
console.log("Size: " + arr3.length);
arr3[0] = 1;
arr3[1] = 2;
console.log(arr3);

console.log("-------------------- Array.of Method -------------------");
let squre = Array.of(1, 4, 9, 16, 25);
console.log(squre);
console.log("Size: " + squre.length);



