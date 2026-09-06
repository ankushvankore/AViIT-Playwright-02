let products = ['Mobile', 'Tab', 'Laptop', 'Speaker', 'Earpods', 'Bluetooth'];

//forEach() method is used to iterate over the elements from array

products.forEach((pr)=>{
    console.log(pr);
    console.log(pr.toUpperCase());
    
    if(pr.includes("Speaker")){
        console.log("Product found!!!");
        //break;        //- Not allowed in forEach() method
    }
})


console.log("----------------- Using for-of loop ---------------");
for(let pr of products){
    console.log(pr);
    if(pr.includes("Earpods")){
        console.log("Product found!!!");
        break;
    }
}

console.log("-------------- some() method -----------------");
products.some((pr)=>{
    console.log(pr);
    if(pr.includes('Laptop')){
        console.log("Product found!!!");
        //break;    //not allowed
        return;
    }
})
