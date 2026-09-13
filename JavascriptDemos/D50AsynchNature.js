import {readFile} from "fs/promises"

for(let i = 1; i <= 10; i++){
    console.log(i);    
}

console.log("Program starts...");

setTimeout(()=>{
    console.log("Hello all!!!");
}, 3000);

console.log("Program ends...");

let res = fetch("https://api.restful-api.dev/collections");
console.log(res);

let text = readFile("Trial.txt", "utf-8");
console.log(text);


async function readFromFile(){
    let text = await readFile("Trial.txt", "utf-8");
    console.log(text);
}

readFromFile();

async function readAPI() {
    let res = await fetch("https://api.restful-api.dev/collections");
    console.log(res);
}

readAPI();