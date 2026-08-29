let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
let index = days.indexOf('Wed');
console.log("Index of Wed: " + index);

let index2 = days.indexOf('Monday');
console.log("Index of Monday: " + index2);      //-1

console.log("---------------------------------------------");
let colors = ['Orange', 'Red', 'Green', 'Blue', 'White', 'Green'];
let gIndex = colors.indexOf('Green');
console.log('Index of Green: ' + gIndex);

let nIndex = colors.indexOf('Green') + 1;

console.log("Index of 2nd Green: " + colors.indexOf('Green', nIndex));
