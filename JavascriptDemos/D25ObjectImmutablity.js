let product = {
    pName: 'Laptop',
    price: 50000
}

console.log(product);

product.price = 65000;

console.log("--------------- After Changing --------------");
console.log(product);

//lets make this object as immutable 
Object.freeze(product);
product.pName = 'Mobile';

console.log("---------------- After freeze --------------");
console.log(product);

console.log("---------------- Add/delete any property ------------");
delete product.pName;
product.company = 'HP';
console.log(product);

console.log("--------------- seal() method ----------------");
let browser = {
    bName: 'Chrome',
    version: 140
}

console.log(browser);
Object.seal(browser);
console.log("----------------- Update any property ----------------- ");

browser.bName = 'Firefox';
console.log(browser);

console.log("----------------- Add / delete any property -------------");
browser.incognito = true;
console.log(browser);

