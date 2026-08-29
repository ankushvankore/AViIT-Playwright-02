/*
Add elements
Delete Elements
Modify Elements
Search Element/s

push()
pop()
shift()
unshift()
join()
*/

let colors = ['Black', 'Red', 'Yello'];
console.log(colors);

//push() - Will add element/s at the END of Array
colors.push('Blue');
console.log("---------- after adding blue-------")
console.log(colors);

colors.push('Orange', 'Navy Blue');
console.log("------------------- After adding 2 colors at the end --------------");
console.log(colors);

//unshift() - Will add the element/s at the bigining of array
colors.unshift('Orange');
console.log("-------------- After addding single element at the begining ------------");
console.log(colors);

colors.unshift('Green', 'Purple');
console.log("------------------- After adding 2 elements at the bigining -----------");
console.log(colors);

console.log("---------- pop() method -----------------");
//pop() will remove and return the element at the end of array
let rElement = colors.pop();
console.log("Removed Element: " + rElement);
console.log(colors);

console.log("--------------- shift() method ----------------");
//shift() - will remove and return the element at the bigining
let rElement2 = colors.shift();
console.log("Removed Element: " + rElement2);
console.log(colors);

console.log("----------------------- join() --------------------");
//join() will convert an array to the string
let words = ['Welcome', 'to', 'Javascript', 'demos'];
let sentence = words.join(" ");
console.log(sentence);

let sentence2 = words.join("$");
console.log(sentence2);

console.log("--------------------- Copying array using '...'(spread operator)--------------");
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr2);

let arr3 = [4, 5, 6];
let arr4 = [...arr1, ...arr3]; //   [1, 2, 3, 4, 5, 6]
console.log(arr4);

console.log("---------------Copying array using concat() method -------------");
let arr5 = arr1.concat(arr3);   //   [1, 2, 3, 4, 5, 6]
console.log(arr5);

console.log("------------------ reverse an array using reverse() method ---------------");
console.log(arr5.reverse());

console.log("--------------------- reverse array using logic -----------------------");

let natak = ['tarun', 'turk', 'mhatare', 'ark', 'marathi', 'old', 'natak', 'mohan', 'joshi'];
let reverseArray = [];

for(let i = natak.length - 1; i >= 0; i--){
    reverseArray[i] = natak[natak.length - 1 - i];
}

console.log(reverseArray);


//shrimant damodar pant marathi natak
//Vasuchi sasu
//Moruchi Mavashi
//Tarun turk mhatare ark
