/*
slice() - finding out part of array
syntax:
slice(starting_index, ending_index); 
here you will get elements from starting_index till endingIndex-1
*/

let numbers = [11, 22, 33, 44, 55, 66, 77 ,88, 99];

console.log(numbers.slice(2, 4));       //[33, 44]
console.log(numbers.slice(3, 7));       //[44, 55, 66, 77]

console.log(numbers.slice(-3));         //will give you last 3 elements [77, 88, 99]

console.log(numbers.slice(5));          //will print all elements from starting index 5
                                        //[66, 77, 88, 99]


