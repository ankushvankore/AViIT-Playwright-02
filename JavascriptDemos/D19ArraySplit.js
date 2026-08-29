let days = 'Monday Tuesday Wednesday Thursday Friday Saturday Sunday';
console.log(days);
console.log(typeof days);

let daysArray = days.split(' ');
console.log(daysArray);

for(let d of daysArray){
    console.log(d);
    
}

let singleDay = days.split(' ')[2];
console.log(singleDay);
