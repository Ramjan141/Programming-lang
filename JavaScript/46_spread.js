// Expands an iterate into multiple values.

// function func (...arr) {
//     do something
// }

let arr = [1, 2, 3, 4, 5];

console.log(Math.min(...arr));// it gives values individually.

// With Array Literals------------->
let newArr = [...arr];//It converts new Array.
console.log(newArr);


let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];

let nums = [...odd, ...even];// works like concatination
console.log(nums);


// With Object Literals---------------->
let data = {
    email: "ramjanansari141@gmail.com",
    password: "abcd"

};
console.log(data);

let dataCopy = { ...data, id: 123, country: "India" };// we can add values using spread.
console.log(dataCopy);


