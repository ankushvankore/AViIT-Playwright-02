/*
splice(): used to remove, insert any element in array at any position
Syntax:
splice(starting_index, no_of_elements_to_be_removed, elements_to_be_inserted);
*/

let fruits = ['Apple', 'Banana', 'Watermelon', 'Orange', 'Pear', 'Grapes'];
                //0     1           2               3       4       5
console.log(fruits);
fruits.splice(3, 1);
console.log(fruits);

console.log("---------------- remove 2 elements ---------------");
//[ 'Apple', 'Banana', 'Watermelon', 'Pear', 'Grapes' ]
fruits.splice(1, 2);
//Remove 2 elements starting from index 1
console.log(fruits);

//[ 'Apple', 'Pear', 'Grapes' ]
console.log("----------------- Insert Orange after Pear ---------------");
fruits.splice(2, 0, 'Orange');
console.log(fruits);

//[ 'Apple', 'Pear', 'Orange', 'Grapes' ]
console.log("--------------- Insert Watermelon & Jackfruit after Orange -----------");
fruits.splice(3, 0, 'Watermelon', 'Jackfruit');
console.log(fruits);

//[ 'Apple', 'Pear', 'Orange', 'Watermelon', 'Jackfruit', 'Grapes' ]
//    0        1        2         3              4            5
//   -6        -5      -4        -3             -2           -1

console.log("--------------------- delete last 3 elements ------------------");
fruits.splice(-2, 2);
console.log(fruits);

//[ 'Apple', 'Pear', 'Orange', 'Watermelon' ]

console.log("------------------ Replace Pear with Mango -----------------");
fruits.splice(1, 1, 'Mango');
console.log(fruits);

