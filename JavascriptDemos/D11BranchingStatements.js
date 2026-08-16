/*
Branching statements allows to change the flow of loop
Javascript has 3 brancing statements
1. break
2. continue
3. return
*/

console.log("------------------ continue ------------------");

for(let i = 1; i <= 20; i++){
    if(i % 5 === 0){
        continue;
    }
    console.log(i);    
}

console.log("------------- break --------------");

for(let i = 1; i <= 20; i++){
    if(i % 5 === 0){
        break;
    }
    console.log(i);    
}

console.log("------------------- prime number --------------");

let no = 9;
let i;
for(i = 2; i <= no; i++){
    if(no % i === 0){
        break;
    }
}
if(i === no){
    console.log("It is prime number");
}
else{
    console.log("This is not prime number");    
}
