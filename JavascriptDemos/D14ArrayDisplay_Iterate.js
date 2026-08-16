/*
For iterating an array you can use 3 loops
1. for loop
2. for-of loop (Enhanced for loop)
3. for-in loop
*/

let browsers = ['Chrome', 'Firefox', 'Brave', 'Safari', 'Opera', 'Edge', 'Internet Explorer'];
console.log(browsers);

for(let i = 0; i < browsers.length; i++){
    console.log(browsers[i]);    
}

console.log("-----------------------------");

/*for(let i = browsers.length - 1; i >= 0; i--){
    browsers[i] = browsers[i].toUpperCase();
    console.log(browsers[i]);
}

console.log(browsers);
*/

console.log("-------------------- for-of loop -------------------");
/*
for-of loop is designed to iterate over array
it is forword only loop
it is read only loop
syntax:
for(let variable of array){
    console.log(variable)
}
*/
for(let b of browsers){
    console.log(b.toUpperCase());    
}
console.log(browsers);

console.log("------------------------- for-in loop -----------------");
//for-in loop given index of array and key for Objects
for(let b in browsers){
    console.log(b + " => " + browsers[b]);    
}