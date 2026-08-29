let user1 = {
    uName: 'Swati',
    uId: 101
}

let user2 = {
    uName: 'Yogita',
    uId: 102
}

let user3 = {
    uName: 'Susmita',
    uId: 103
}

console.log(user1);
console.log(user2);
console.log(user3);

console.log("------------------ Copy Object -----------------");
user1 = user2;
console.log(user1);
console.log(user2);
console.log(user3);

