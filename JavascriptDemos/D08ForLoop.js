/*
for loop
syntax:

for(initilization; condition; increment/decrement){
    statements;
}
*/

/* 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 */

let no = 1;
for(no = 1; no <= 10; no++){
    console.log(no);    
}

console.log("------------------------------");

//10, 9, 8 ------ 1
for(let i = 10; i >= 1; i--){
    console.log(i);    
}

console.log("----------------------------------");
//1, 3, 5, 7, 9
for(let j = 1; j <= 10; j++){
    if(j % 2 != 0){
        console.log(j);
    }
}

console.log("----------------------------");
for(let j = 1; j <= 10; j += 2){
    console.log(j);    
}

console.log("-------------- sum of 1 to 10 ------------");
let sum = 0;
for(let i = 1; i <= 10; i++){
    sum = sum + i;
}

console.log("Sum: " + sum);
