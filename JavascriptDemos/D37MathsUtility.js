/*
Utility - is a set of variables, functions, arrays, classes, objects etc.
that can be reused in multiple files
*/
export const pi = 3.142;
export let salary = 50000;
/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 */
export function addition(n1, n2){
    console.log("Addition: " + (n1 + n2));    
}

/**
 * 
 * @param {number} n1 
 * @param {number} n2 
 * @returns 
 */
export function subtraction(n1, n2){
    return(n1 - n2);
}

let area = function(rd){
    console.log("Area of Circle: " + (pi * rd * rd));
}

class StudentData{
    rollNo;
    stName;
    constructor(rn, sn){
        this.rollNo = rn;
        this.stName = sn;
    }
    displayData(){
        console.log("Roll No: " + this.rollNo);
        console.log("Student Name: " + this.stName);
    }
}

export {area, StudentData};
