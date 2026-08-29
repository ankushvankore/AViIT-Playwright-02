/*
Object is Key-Value pair/collection in JS
By default Every key is of type String and value can be of any type
Ways to declare Object in JS
1. Object Literal way
2. Using class (ES6) (Modern JS)
3. Using Constructor
4. Prototype based object
*/

console.log("---------------------- Object Literal --------------");
let person = {};    //{} treats as object
console.log(person);
console.log(typeof person);

console.log("------------------ user object ----------------");
let user = {
    fName: 'Supriya',
    lName: 'Mehar',
    age: 25,
    isEmployee: true,
    isActive: true
}
console.log(user);
console.log(typeof user);

/*
Accessing elements from Object
1. using . operator
2. using [] operator
*/

console.log("---------------- uisng . (dot) operator ------------------");
console.log('First Name : ' + user.fName);
console.log('Last Name  : ' + user.lName);
console.log('Age        : ' + user.age);
console.log('Is Employee: ' + user.isEmployee);
console.log('Is Active  : ' + user.isActive);

console.log("---------------- uisng [] operator ------------------");
console.log('First Name : ' + user['fName']);
console.log('Last Name  : ' + user['lName']);
console.log('Age        : ' + user['age']);
console.log('Is Employee: ' + user['isEmployee']);
console.log('Is Active  : ' + user['isActive']);

console.log("--------------------- Adding new properties ------------");
user.city = 'Delhi';
user.country = 'India';

console.log(user);

console.log("--------------- Deleting property --------------");
delete user.isActive;
console.log(user);

console.log("-------------------- Modifying Property --------------");
user.city = 'Kolhapur';
console.log(user);

console.log("--------------------- Iteration -------------------");
for(let key in user){
    console.log(key);
}

for(let key in user){
    console.log(key + "==> " + user[key]);   
}

console.log('---------------------- NULL Reference -------------------');
let student = {
    rollNo: 101,
    stName: 'Sagar',
    city: null
}
console.log(student);

student = null;

console.log(student);
student.rollNo = 123;
