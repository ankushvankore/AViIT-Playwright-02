/*
while loop
Syntax:

initilization
while(condition){
    statement/s;
    increment/decrement;
}
*/

let i = 1;
while(i <= 10){
    console.log("Supriya");    
    i++;
}

console.log("---------------------- sum of digits --------------");
let no = 5874;  
let sum = 0;        //5 + 8 + 7 + 4

while(no > 0){
    let rem = no % 10;
    no = Math.floor(no / 10);       //will convert the answer in integer no
    sum = sum + rem;
}
console.log("Sum: " + sum);
