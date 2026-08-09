/*
Conditional Statements: 
Allows to check any condition and take the decision depending on the condition
JS allows 5 types of conditional statements
1. if
2. if-else
3. nested if
4. ladder if
5. switch-case
*/
console.log("--------------------------------------");
let bill = 3456;
let dis = 0;
let net = 0;

if(bill >= 1000){
    dis = bill * 0.10;
}
net = bill - dis;
console.log("Discount: " + dis);
console.log("Net Bill: " + net);

let href = "https://www.google.com";
if(href != null){
    console.log("Link is active!!!");    
}

console.log("----------------------- if-else ---------------------");

let age = 16;
let uName = "Supriya";

if(age >= 18){
    console.log(`${uName}, you are valid for voting!!!`);
}
else{
    console.log(`${uName}, you are not valid for voting!!!`);
}

let no = -9;
if(no < 0){
    console.log(`${no}, is -ve`);
}
else{
    console.log(`${no}, is +ve`);
}

let no2 = -88;
if(no2 % 2 === 0){
    console.log(`${no2}, is Even`);
}
else{
    console.log(`${no2}, is Odd`);
}

let statusCode = 500;
if(statusCode === 200){
    console.log("Test case pass...");
}
else{
    console.log("Test case fail... Status code is: " + statusCode);
}

console.log("---------------- nested if-else --------------------");
/*
>= 85           A++
>= 70 & < 85    A
>= 55 & < 70    B
>= 35 & < 55    C
<35             Fail
*/
let marks = 34;

if(marks >= 85){
    console.log("Grade A++");
}
else{
    if(marks >= 70){
        console.log("Grade A");
    }
    else{
        if(marks >= 55){
            console.log("Grade B");            
        }
        else{
            if(marks >= 35){
                console.log("Grade C");
            }
            else{
                console.log("Fail :(");                             
            }
        }
    }
}

console.log("--------------- Ladder if ----------------------");
let n1 = 144, n2 = 155, n3 = 66;

if(n1 > n2 && n1 > n3){
    console.log("Max: " + n1);    
}
else if(n2 > n1 && n2 > n3){
    console.log("Max: " + n2);    
}
else{
    console.log("Max: " + n3);
}

let browser = "firefox";
if(browser === "Chrome"){
    console.log("Executing script on Chrome");
}
else if(browser === "Firefox"){
    console.log("Executing script on Firefox");
}
else if(browser === "Edge"){
    console.log("Executing script on Edge");
}
else if(browser === "Safari"){
    console.log("Executing script on Safari");
}
else{
    console.log("Invalid browser");
}

/*
Not checking the range
rather checking indudivial value
*/
console.log("------------------- switch-case -------------------");
let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day");
}

let num1 = 66, num2 = 8, ans = 0;
let operation = "9";

switch(operation){
    case "+":
        ans = num1 + num2;
        console.log(`${num1} ${operation} ${num2} = ${ans}`);
        break;
    case "-":
        ans = num1 - num2;
        console.log(`${num1} ${operation} ${num2} = ${ans}`);
        break;
    case "*":
        ans = num1 * num2;
        console.log(`${num1} ${operation} ${num2} = ${ans}`);
        break;
    case "/":
        ans = num1 / num2;
        console.log(`${num1} ${operation} ${num2} = ${ans}`);
        break;
    case "%":
        ans = num1 % num2;
        console.log(`${num1} ${operation} ${num2} = ${ans}`);
        break;
    default:
        console.log("Invalid operator!!!");        
}
//console.log("Answer: " + ans);

