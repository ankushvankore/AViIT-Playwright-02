/*
Anonymous Function: This is the function which do not have a name
*/

let test1 = function(){
    console.log("This is trial function...");    
}

test1();

/**
 * 
 * @param {number} no 
 */
let squre = function(no){
    return (no * no);
}

console.log("Squre: " + squre(7));

function findMax(n1, n2){
    console.log(n1);
    console.log(n2);    
}

findMax(10);