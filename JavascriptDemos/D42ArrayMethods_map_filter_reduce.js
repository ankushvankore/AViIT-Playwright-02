/*
1. map() -> Will transform an array, will create another array using original array
2. filter() -> will apply a filter for array. like getting only odd numbers rom array
3. reduce() -> will reduce array elements like calculate sum of all elements
these all are methods of array class, which accepts one function as a parameter
means callback function
*/

console.log("------------------ map() ------------------");

//map() 
let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sqNumbers = numbers1.map((num)=>{
    return num * num;
})
console.log(numbers1);
console.log(sqNumbers);

let footerLinks = ['About', 'Contact', 'Careers', 'Products'];
/*let amazonLinks = footerLinks.map((link)=>{
    return link + " - Amazon";
})*/
let amazonLinks = footerLinks.map(link=> link + " - Amazon");
console.log(amazonLinks);

console.log("---------------- filter() -----------------");
let evenNumbers = numbers1.filter((no)=>{
    return no % 2 === 0;
})
console.log(evenNumbers);

let oddNumbers = numbers1.filter(no => no % 2 != 0);
console.log(oddNumbers);

amazonLinks.splice(3, 0, "Dashboard", 'Chatbot');
console.log(amazonLinks);

let newLinks = amazonLinks.filter(link => link.includes("Amazon"));
console.log(newLinks);

console.log("-------------------- reduce() method --------------------");

let numbers2 = [10, 20, 30, 40, 50];
console.log(numbers2);
/*let sum = 0;
for(let no of numbers2){
    sum = sum + no;
}*/
let sum = 0;
sum = numbers2.reduce((sum, no)=>sum + no);

console.log(sum);


